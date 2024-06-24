import PersonList from "../person-list/PersonList";

import PersonProps from "../person/PersonProps";

const Home = ({ list, setList }: PersonProps) => {
  return (
    <>
      <p>
        <strong>You can manage here your person records</strong>
      </p>
      <PersonList list={list} setList={setList} />
    </>
  );
};

export default Home;
