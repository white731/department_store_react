import { Header } from "semantic-ui-react"
import { useEffect, useState } from "react"
import Axios from "axios"

const Items = ({departmentId}) => {

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

  const renderItems = () =>{
    return items.map((item)=>(
      <>
      {item.name}
      </>
    ))
  }

return(
  <Header>{renderItems()}</Header>
)
}

export default Items