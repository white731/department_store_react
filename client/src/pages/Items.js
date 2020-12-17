import { Header, Card, Button} from "semantic-ui-react"
import { useEffect, useState } from "react"
import Axios from "axios"
import ItemPage from "./ItemPage"
import ItemForm from "./ItemForm"


const Items = ({departmentId}) => {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    getItems()
  },[])

  const getItems = async () => {
    try {
      // console.log(props.departmentId)
      let res = await Axios.get(`/api/departments/${departmentId}/items/`);
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = async (id) => {
   try {
      let res = await Axios.delete(`/api/departments/${departmentId}/items/${id}`)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }

    let filteredItems = items.filter((item)=> item.id !== id)
    setItems(filteredItems)
  }

  const updateName = async (name, id) => {
    try {
      // console.log(props.departmentId)
      let res = await Axios.put(`/api/departments/${departmentId}/items/${id}`,{name: name})
      let updatedItems = items.map((i)=> i.id !== id ? i : res.data)
      setItems(updatedItems)


    } catch (err) {
      console.log(err)
    } 
  }

  const updatePrice = async (price, id) => {
    try {
      let res = await Axios.put(`/api/departments/${departmentId}/items/${id}`,{price: price})
      let updatedItems = items.map((i)=> i.id !== id ? i : res.data)
      setItems(updatedItems)


    } catch (err) {
      console.log(err)
    } 
  }

  const renderItems = () =>{
    
    return (
    <Card.Group itemsPerRow={3}>
    {items.map((item)=>(
      <>
        <ItemPage key={`Item-${item.id}`} name={item.name} price={item.price} id={item.id} departmentId={departmentId} updateName={updateName} updatePrice={updatePrice} removeItem={removeItem}/>
      </>
    ))}
    </Card.Group>
    );
  };

  const addItem = async (newItem) => {
    try {
      let res = await Axios.post(`/api/departments/${departmentId}/items`,newItem)
      console.log(res.data)
      setItems([...items, res.data])
    } catch (err) {
      console.log(err)
    }
  }

  const sortByPrice = async () => {
    try {
      // this should be the url of sorted by Name
      let res = await Axios.get(`/api/departments/${departmentId}/sort_by_price`)
      setItems(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const sortByName = async () => {
    try {
      // this should be the url of sorted by Name
      let res = await Axios.get(`/api/departments/${departmentId}/sort_by_name`)
      setItems(res.data)
    } catch (err) {
      console.log(err)
    }
  }

return(
  <>
    <ItemForm addItem = {addItem}/>
    <Button onClick = {sortByPrice} style={{marginTop: "10px"}}>Sort By Price</Button>
    <Button onClick = {sortByName} style={{marginTop: "10px"}}>Sort By Name</Button>
    <Header>{renderItems()}</Header>
  </>
)
}

export default Items;
