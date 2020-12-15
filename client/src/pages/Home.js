import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Card, Button } from "semantic-ui-react";

// const dummyDepartments = [
//   { id: 1, name: "Dept 1" },
//   { id: 2, name: "Dept 2" },
// ];

export default () => {
  const [departments, setDepartments] = useState([]);
  const [resData, setResData] = useState([]);

  useEffect(() => {
    readDepartments();
  }, []);

  const readDepartments = async () => {
    try {
      let res = await Axios.get("/api/departments");
      console.log(res);
      setResData(res.data);
      setDepartments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const readDepartment = async () => {
    try {
    } catch (err) {}
  };

  const createDepartment = async () => {
    try {
    } catch (err) {}
  };

  const updateDepartment = async () => {
    try {
    } catch (err) {}
  };

  const deleteDepartment = async () => {
    try {
    } catch (err) {}
  };

  return (
    <>
      <Header as="h1">The Department Store</Header>
      <Button onClick={createDepartment}>Add Department</Button>
      {departments.map((r) => (
        <Card key={r.id}>
          <Link to={`/departments/${r.id}`}>
            <Card.Content>
              <Card.Header>{r.name}</Card.Header>
            </Card.Content>
          </Link>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Edit
              </Button>
              <Button basic color="red">
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))}
    </>
  );
};
