import React, { useContext, useEffect } from "react";
import UserContext from "../../context/User/UserContext";
import CardsPersonal from "../ui/CardsPersonal";

const ListaUsuarios = () => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="overflow-auto vh-100">
      {users.length === 0 ? (
        <h1>No HAY USUARIOS</h1>
      ) : (
        ((<h1>Lista Usuarios</h1>),
        users.map((usuario) => <CardsPersonal key={usuario.id} {...usuario} />))
      )}
    </div>
  );
};

export default ListaUsuarios;
