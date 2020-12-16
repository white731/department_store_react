import { Card, Button, Form } from "semantic-ui-react"
import { useState } from "react"

const ItemPage = ({name, price, id, updateName, removeItem, updatePrice}) => {

  const [editName, setEditName] = useState(name)
  const [editPrice, setEditPrice] = useState(price)
  const [showEditName, setShowEditName] = useState(false)
  const [showEditPrice, setShowEditPrice] = useState(false)

  const removeSelectedItem = async () => {
    removeItem(id)
  }


  const handleNameSubmit = () => {
    console.log(editName)
    setShowEditName(false)
    updateName(editName, id)
  }

  const handlePriceSubmit = () => {
    console.log(editPrice)
    setShowEditPrice(false)
    updatePrice(editPrice, id)
  }

  const renderName = () => {
    if (showEditName){
      return renderEditName()
    }
    return name
  }

  const renderPrice = () => {
    if (showEditPrice){
      return renderEditPrice()
    }
    return `$${price}`
  }

  const renderEditName = () => {
    return(
    <Form onSubmit={handleNameSubmit}>
      <Form.Field>
        <input placeholder='Item Name' onChange={(e)=>{setEditName(e.target.value)}} value={editName}/>
      </Form.Field>
   </Form>
    )
  }

  const renderEditPrice = () => {
    return(
    <Form onSubmit={handlePriceSubmit}>
      <Form.Field>
        <input placeholder='Price' onChange={(e)=>{setEditPrice(e.target.value)}} value={editPrice}/>
      </Form.Field>
   </Form>
    )
  }
 
return(
  <Card>
    <Card.Content>
        <Card.Header onClick={()=>setShowEditName(true)}>{renderName()}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Description onClick={()=>setShowEditPrice(true)}>{renderPrice()}</Card.Description>
    </Card.Content>
  <Card.Content extra>
    <div className="ui two buttons">
      <Button basic color="red" onClick={removeSelectedItem}>
        Delete
      </Button>
    </div>
  </Card.Content>
</Card>
)
}

export default ItemPage