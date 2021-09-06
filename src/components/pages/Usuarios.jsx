import React, { useContext, useEffect, useState } from "react";

import UserContext from "../../context/User/UserContext";
import InputsForm from "../ui/InputsForm";

const Usuarios = () => {
  const { createUser, selectedUser, updateUser, cleanUser } = useContext(
    UserContext
  );

  const initialState = {
    nombre_usuario: "",
    cedula_Usuario: "",
    telefono_usuario: "",
    mail_usuario: "",
  };

  const [formValues, setFormValues] = useState(initialState);

  const {
    nombre_usuario,
    cedula_Usuario,
    telefono_usuario,
    mail_usuario,
  } = formValues;
  useEffect(() => {
    if (selectedUser !== null) {
      setFormValues({
        nombre_usuario: selectedUser[0].nombre_usuario,
        cedula_Usuario: selectedUser[0].cedula_Usuario,
        telefono_usuario: selectedUser[0].telefono_usuario,
        mail_usuario: selectedUser[0].mail_usuario,
      });
    }
    console.log(selectedUser);
  }, [selectedUser]);
  const reset = () => {
    setFormValues(initialState);
  };
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser === null) {
      createUser(formValues);
    } else {
      formValues.id = selectedUser[0].id;
      updateUser(formValues);
    }
    reset();
  };
  const handleCancel = (e) => {
    e.preventDefault();
    reset();
    cleanUser();
  };
  return (
    <>
      <h1 className="card-title">Crud usuario 4Go</h1>
      <form onSubmit={handleSubmit}>
        <InputsForm
          labelTitle="Nombre de Usuario"
          componentName="nombre_usuario"
          componentValue={nombre_usuario}
          handleInputChange={handleInputChange}
        />
        <InputsForm
          labelTitle="Número cédula"
          componentName="cedula_Usuario"
          componentValue={cedula_Usuario}
          handleInputChange={handleInputChange}
        />
        <InputsForm
          labelTitle="Número telefónico"
          componentName="telefono_usuario"
          componentValue={telefono_usuario}
          handleInputChange={handleInputChange}
        />
        <InputsForm
          labelTitle="Correo electrónico"
          componentName="mail_usuario"
          componentValue={mail_usuario}
          handleInputChange={handleInputChange}
          type="mail"
        />
        <button type="submit" className="btn btn-outline-primary">
          Guardar
        </button>
        {selectedUser !== null && (
          <button onClick={handleCancel} className="btn m-2 btn-outline-info">
            Cancelar
          </button>
        )}
      </form>
    </>
  );
};

export default Usuarios;
