import { Form, Button } from "semantic-ui-react"
import { useState } from "react"

const ItemForm = ({addItem}) => {

const [name, setName] = useState("")
const [price, setPrice] = useState("")

const handleSubmit=()=>{
  console.log("name: ", name)
  console.log("price: ", price)
  addItem({
    name: name, 
    price: price
  })
}


  return (
  <>
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Item Name</label>
        <input placeholder='Item Name' onChange={(e)=>{setName(e.target.value)}} value={name}/>
      </Form.Field>
      <Form.Field >
        <label>Price</label>
        <input placeholder='Price' onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </>
  )
} 

export default ItemForm