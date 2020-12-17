import Axios from "axios";
import { useEffect, useState } from "react";
import { Header, Segment, Dimmer, Loader, Container } from "semantic-ui-react";
import Items from "./Items";

export default ({ match, history }) => {
  // axios call, set state to dept singular, then can show params
  // render deptshow in home, pass props down in id
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getDepartment();
  },[]);

  const getDepartment = async () => {
    try {
      let res = await Axios.get(`/api/departments/${match.params.id}`);
      setDepartment(res.data);
    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  };

  const updateAfterDelete = () =>{
    history.go(0)
  }


  if (loading) return (
  <Container>
    <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>
    </Segment>
  </Container>
    )

  if (error) return (<p>Error</p>)
  return (
  <>
    <Header as="h2">{department.name}</Header>
    <Items departmentId = {department.id} updateAfterDelete={updateAfterDelete}/>
  </>)}
