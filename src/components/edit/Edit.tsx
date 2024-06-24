import { useEffect } from "react";
import PersonProps from "../person/PersonProps";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import $ from "jquery";

const Edit = ({ list, setList }: PersonProps) => {
  const cancelarEditarPerson = () => (window.location.href = "/");
  
  const editarPerson = () => {
    const nombre = $("#editar-nombre").val()?.toString();
    const apellido = $("#editar-apellido").val()?.toString();
    const fechaNacimiento = $("#editar-fecha_nacimiento").val()?.toString();
    const puesto = $("#editar-puesto").val()?.toString();
    const sueldo = $("#editar-sueldo").val()?.toString();
    
    let temporalPerson = localStorage.getItem("temporalEditingPerson");
    if (temporalPerson !== null) {
      let currentPersonId = parseInt(JSON.parse(temporalPerson).id);
      if (
        nombre !== undefined &&
        apellido !== undefined &&
        fechaNacimiento !== undefined &&
        puesto !== undefined &&
        sueldo !== undefined
      ) {
        list = list.map((person) => {
          console.log(currentPersonId);
          if (person.id === currentPersonId) {
            person.nombre = nombre;
            person.apellido = apellido;
            person.fechaNacimiento = fechaNacimiento;
            person.puesto = puesto;
            person.sueldo = parseFloat(sueldo);
          }
          return person;
        });
        console.log(list);
        setList(list);
        localStorage.setItem("personList", JSON.stringify(list));
        localStorage.removeItem("temporalEditingPerson")
        window.location.href = "/";
      }
    }
  };

  useEffect(() => {
    let currentPerson = localStorage.getItem("temporalEditingPerson");
    if (currentPerson !== null) {
      currentPerson = JSON.parse(currentPerson);
      const temporalDate = currentPerson.fechaNacimiento.split("-");
      $("#editar-nombre").val(currentPerson.nombre);
      $("#editar-apellido").val(currentPerson.apellido);
      $("#editar-fecha_nacimiento").val(`${temporalDate[0]}-${temporalDate[1]}-${temporalDate[2]}`);
      $("#editar-puesto").val(currentPerson.puesto);
      $("#editar-sueldo").val(currentPerson.sueldo);
    }
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" id="editar-nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" id="editar-apellido" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type="date" id="editar-fecha_nacimiento" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Puesto</Form.Label>
        <Form.Control type="text" id="editar-puesto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sueldo</Form.Label>
        <Form.Control type="number" min={0} id="editar-sueldo" />
      </Form.Group>

      <Button
        id="crear-person"
        variant="primary"
        type="button"
        onClick={editarPerson}
      >
        Editar
      </Button>

      <Button
        id="cancelar-crear-person"
        variant="secondary"
        type="button"
        onClick={cancelarEditarPerson}
      >
        Cancelar
      </Button>
    </Form>
  );
};

export default Edit;
