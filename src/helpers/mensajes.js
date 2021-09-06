import Swal from "sweetalert2";

export const errorFormulario = (areaMessaje) =>
  Swal.fire({
    icon: "error",
    title: "Error en el formulario",
    text: areaMessaje,
  });
export const successMessage = (title, areaMessaje) =>
  Swal.fire({
    icon: "success",
    title: title,
    text: areaMessaje,
  });
