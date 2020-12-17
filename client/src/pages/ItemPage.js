import { Card, Button, Form } from "semantic-ui-react";
import Axios from "axios";
import { useState } from "react";

const ItemPage = ({ name, price, id, departmentId, updateName }) => {
  const [editName, setEditName] = useState(name);
  const [showEditName, setShowEditName] = useState(false);

  const removeItem = async () => {
    try {
      let res = await Axios.delete(
        `/api/departments/${departmentId}/items/${id}`
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNameSubmit = () => {
    console.log(editName);
    setShowEditName(false);
    updateName(editName, id);
  };

  const renderName = () => {
    if (showEditName) {
      return renderEditName();
    }
    return name;
  };

  const renderEditName = () => {
    return (
      <Form onSubmit={handleNameSubmit}>
        <Form.Field>
          <input
            placeholder="Item Name"
            onChange={(e) => {
              setEditName(e.target.value);
            }}
            value={editName}
          />
        </Form.Field>
      </Form>
    );
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header onClick={() => setShowEditName(true)}>
          {renderName()}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>${price}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="red" onClick={removeItem}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ItemPage;
