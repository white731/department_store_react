import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Card, Button } from "semantic-ui-react";
import DepartmentForm from "./DepartmentForm";
import EditDepartmentForm from "./EditDepartmentForm";

// const dummyDepartments = [
//   { id: 1, name: "Dept 1" },
//   { id: 2, name: "Dept 2" },
// ];

export default () => {
  const [departments, setDepartments] = useState([]);
  const [resData, setResData] = useState([]);
  const [showEdit, setShowEdit] = useState(null);

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

  const deleteDepartment = async (id) => {
    try {
      let res = await Axios.delete(`/api/departments/${id}`);
      console.log(res.data);
      setResData(res.data);
      let newDepartment = departments.filter((p) => p.id !== res.data.id);
      setDepartments(newDepartment);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  const addDepartment = async (newDepartment) => {
    try {
      let res = await Axios.post(`/api/departments`, newDepartment);
      console.log(res.data);
      setDepartments([...departments, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateDepartment = async (id, department) => {
    let res = await Axios.put(`/api/departments/${id}`, department);
    let updatedDepartments = departments.map((d) =>
      d.id !== id ? d : res.data
    );
    setDepartments(updatedDepartments);
  };

  const headerStyle = {
    fontSize: 20,
    fontWeight: "bold",
    padding: 7,
    color: "black",
  };

  const handleClick = (id) => {
    setShowEdit(id);
  };

  return (
    <>
      <Header as="h1">The Department Store</Header>
      <DepartmentForm addDepartment={addDepartment} />
      <Header as="h2">Current Departments</Header>
      <Card.Group itemsPerRow={4}>
        {departments.map((r) => (
          <Card key={r.id}>
            <Link to={`/departments/${r.id}`}>
              <Card.Content>
                <Card.Header style={headerStyle}>{r.name}</Card.Header>
              </Card.Content>
            </Link>
            {showEdit == r.id ? (
              <EditDepartmentForm
                setShowEdit={setShowEdit}
                updateDepartment={updateDepartment}
                placeholderz={r.name}
                {...r}
              />
            ) : (
              <p></p>
            )}
            <Card.Content extra>
              <div className="ui two buttons">
                <Button onClick={() => handleClick(r.id)} basic color="green">
                  Edit
                </Button>
                <Button
                  onClick={() => deleteDepartment(r.id)}
                  basic
                  color="red"
                >
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
};
