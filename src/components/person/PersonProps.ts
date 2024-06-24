import { Dispatch, SetStateAction } from "react";
import Person from "./Person";

interface PersonProps {
    list: Person[];
    setList: Dispatch<SetStateAction<Person[]>>;
}

export default PersonProps;