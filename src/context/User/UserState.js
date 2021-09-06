import React, { useReducer } from "react";
import { fetchApi } from "../../helpers/fetch";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import { successMessage } from "../../helpers/mensajes";
import Swal from "sweetalert2";

const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const cleanUser = () => {
    dispatch({
      type: "CANCEL_EDIT",
    });
    return;
  };

  const getUsers = async () => {
    const resp = await fetchApi("/");
    const { users } = await resp.json();
    console.log(users);
    dispatch({
      type: "GET_USERS",
      payload: users,
    });

    return users;
  };
  const getUser = (id) => {
    dispatch({
      type: "SELECT_USER",
      payload: id,
    });
  };

  const delUser = async (id) => {
    const resp = await fetchApi("/delete", { id }, "DELETE");
    const { msg } = await resp.json();
    if (msg === "Usuario Eliminado") {
      console.log("Eliminado");
      console.log(id);
      dispatch({
        type: "DELETE_USER",
        payload: id,
      });
      successMessage(
        "Registro Borrado",
        "El usuario ha sido correctamente eliminado"
      );
    }
  };
  const createUser = async (user) => {
    const resp = await fetchApi("/new", user, "POST");
    const { userId } = await resp.json();
    user.id = userId;
    dispatch({
      type: "ADD_NEW_USER",
      payload: user,
    });
    successMessage(
      "Registro Guardado",
      `El usuario ${user.nombre_usuario}ha sido correctamente eliminado`
    );
    return userId;
  };

  const updateUser = async (user) => {
    const resp = await fetchApi("/update", user, "POST");
    successMessage(
      "Registro Actualizado",
      `El usuario ${user.nombre_usuario}ha sido correctamente actualizado`
    );
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getUser,
        delUser,
        createUser,
        cleanUser,
        updateUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
