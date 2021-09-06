import React, { useContext } from "react";
import UserContext from "../../context/User/UserContext";
const CardsPersonal = ({
  nombre_usuario,
  cedula_Usuario,
  telefono_usuario,
  mail_usuario,
  id,
}) => {
  const { delUser, getUser } = useContext(UserContext);
  const handleDelete = () => delUser(id);
  const handleEdit = () => getUser(id);
  return (
    <div className="container mt-5" key={id + nombre_usuario}>
      <div className="card">
        <div className="d-flex bd-highlight">
          <div className="pt-2 pl-2 pr-2 pb-0 flex-fill bd-highlight">
            <img
              src="https://www.tsensor.online/wp-content/uploads/2020/04/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512-300x300.png"
              width="155"
              alt="demo"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="p-2 flex-fill ">
            <div className="ml-3  w-100">
              <h4 className="mb-0 mt-0">{nombre_usuario}</h4>
              <h6 className="mb-0 mt-0">C.I. {cedula_Usuario}</h6>
              <h6 className=" mb-0 mt-0 small">{mail_usuario}</h6>
              <span className="justify-content-around small">
                {telefono_usuario}
              </span>
            </div>
          </div>
        </div>
        <div className="small d-flex justify-content-center mb-1 text-white">
          <div className="order-1 bd-highlight m-1">
            <button className="btn btn-success" onClick={handleEdit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eraser-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z" />
              </svg>
            </button>
          </div>
          <div className="order-2 bd-highlight m-1">
            <button className="btn btn-danger" onClick={handleDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPersonal;
