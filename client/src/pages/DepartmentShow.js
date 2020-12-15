import Axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import Items from "./Items";

export default ({ match }) => {
  // axios call, set state to dept singular, then can show params
  // render deptshow in home, pass props down in id
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    getDepartment();
  }, []);

  const getDepartment = async () => {
    try {
      let res = await Axios.get(`/api/departments/${match.params.id}`);
      setDepartment(res.data);
    } catch (err) {}
  };


  if (!department) {return <p>Loading</p>}
  return (
  <>
    <Header as="h2">{department.name}</Header>
    <p>{department.id}</p>
    {department && <Items departmentId = {department.id}/>} 
  </>
  )
};
