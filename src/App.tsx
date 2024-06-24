import "./App.css";
import Create from "./components/create/Create";
import Home from "./components/home/Home";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import { useEffect, useState } from "react";
import Person from "./components/person/Person";
import Edit from "./components/edit/Edit";

function App() {
  const [personList, setPersonList] = useState<Person[]>([]);

  useEffect(() => {
    const localPerson = localStorage.getItem("personList");
    if (localPerson !== null) {
      setPersonList(JSON.parse(localPerson));
    }
  }, personList);
  
  return (
    <main className="container-md">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home list={personList} setList={setPersonList} />} />
        <Route path="/create" element={<Create list={personList} setList={setPersonList} />} />
        <Route path="/edit" element={<Edit list={personList} setList={setPersonList} />} />
      </Routes>
    </main>
  );
}

export default App;
