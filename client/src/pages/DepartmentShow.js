import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "semantic-ui-react";

export default ({ match }) => {
  // axios call, set state to dept singular, then can show params
  // render deptshow in home, pass props down in id
  const [department, setDepartment] = useState({});

  useEffect(() => {
    getDepartment();
  }, []);

  const getDepartment = async () => {
    try {
      let res = await Axios.get(`/api/departments/${match.params.id}`);
      setDepartment(res.data);
    } catch (err) {}
  };

  return <Header as="h2">{department.name}</Header>;
};
