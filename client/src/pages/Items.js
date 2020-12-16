import { Header} from "semantic-ui-react"
import { useEffect, useState } from "react"
import Axios from "axios"
import ItemPage from "./ItemPage"
import ItemForm from "./ItemForm"


const Items = ({departmentId, updateAfterDelete}) => {

  useEffect(()=>{
    getItems()
  },[])

  const [items, setItems] = useState([])

  const getItems = async () => {
    
    try {
      // console.log(props.departmentId)
      let res = await Axios.get(`/api/departments/${departmentId}/items/`)
      setItems(res.data)


    } catch (err) {
      console.log(err)
    } 
  }

  // const updateAfterDelete = () => {
  //   // let updatedItems = Items.filter((item)=> item.id !== itemDeleted.id)
  //   // setItems(updatedItems)
  //   // renderItems()
  // }
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

  const renderItems = () =>{
    return items.map((item)=>(
      <>
        <ItemPage key={`Item-${item.id}`} name={item.name} price={item.price} id={item.id} departmentId={departmentId} updateName={updateName}/>
      </>
    ))
  }

  const addItem = async (newItem) => {
    try {
      let res = await Axios.post(`/api/departments/${departmentId}/items`,newItem)
      console.log(res.data)
      setItems([...items, res.data])
    } catch (err) {
      console.log(err)
    }
  }

return(
  <>
    <ItemForm addItem = {addItem}/>
    <Header>{renderItems()}</Header>
  </>
)
}

export default Items