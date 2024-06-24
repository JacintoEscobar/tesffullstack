import ListGroup from "react-bootstrap/ListGroup";
import Person from "../person/Person";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PersonList.css";
import Swal from "sweetalert2";

import PersonProps from "../person/PersonProps";

const PersonList = ({ list, setList }: PersonProps) => {
  const deletePerson = (deletedPerson: Person) => {
    Swal.fire({
      title: "Delete person",
      text: "¿Deseas continuar?",
      icon: "warning",
      confirmButtonText: "Continuar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
    })
      .then((respuesta) => {
        if (respuesta.isConfirmed) {
          list = list.filter((person) => person.id !== deletedPerson.id);
          setList(list);
          localStorage.setItem("personList", JSON.stringify(list));
        }
      })
      .finally(() => {
        Swal.fire({
          title: "¡Hecho!",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
      });
  };

  const editPerson = (person: Person) => {
    localStorage.setItem("temporalEditingPerson", JSON.stringify(person));
    window.location.href = "/edit";
  };

  return (
    <section className="container-fluid" id="person-list">
      <ListGroup>
        {list.map((person) => (
          <ListGroup.Item key={person.id}>
            <span>{person.nombre}</span>
            <Button variant="warning" onClick={() => editPerson(person)}>Editar</Button>
            <Button variant="danger" onClick={() => deletePerson(person)}>
              Eliminar
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
};

export default PersonList;
