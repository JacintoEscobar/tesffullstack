import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./create.css";

import PersonProps from "../person/PersonProps";

import $ from "jquery";

const Create = ({ list, setList }: PersonProps) => {
  const cancelarCrearPerson = () => (window.location.href = "/");

  const crearPerson = () => {
    const nombre = $("#create-nombre").val()?.toString();
    const apellido = $("#create-apellido").val()?.toString();
    const fechaNacimiento = $("#create-fecha_nacimiento").val()?.toString();
    const puesto = $("#create-puesto").val()?.toString();
    const sueldo = $("#create-sueldo").val()?.toString();

    let newId = 1;
    if (list.length > 0) {
      list.forEach((person) => {
        if (person.id > newId) {
          newId = person.id;
        }
      });
      newId += 1;
    }
    
    if (
      nombre !== undefined &&
      apellido !== undefined &&
      fechaNacimiento !== undefined &&
      puesto !== undefined &&
      sueldo !== undefined
    ) {
      list.push({
        id: newId,
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
        puesto: puesto,
        sueldo: parseFloat(sueldo),
      });
      setList(list);
      console.log(list);
      localStorage.setItem("personList", JSON.stringify(list));
      window.location.href = "/";
    }
  };
  
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" id="create-nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" id="create-apellido" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type="date" id="create-fecha_nacimiento" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Puesto</Form.Label>
        <Form.Control type="text" id="create-puesto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sueldo</Form.Label>
        <Form.Control type="number" min={0} id="create-sueldo" />
      </Form.Group>

      <Button
        id="crear-person"
        variant="primary"
        type="button"
        onClick={crearPerson}
      >
        Crear
      </Button>

      <Button
        id="cancelar-crear-person"
        variant="secondary"
        type="button"
        onClick={cancelarCrearPerson}
      >
        Cancelar
      </Button>
    </Form>
  );
};

export default Create;
