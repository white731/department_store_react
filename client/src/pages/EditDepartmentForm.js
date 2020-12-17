import { Form, Button } from "semantic-ui-react";
import { useState } from "react";

const EditDepartmentForm = ({
  placeholderz,
  setShowEdit,
  updateDepartment,
  id,
}) => {
  const [name, setName] = useState(placeholderz);

  const handleSubmit = () => {
    console.log("name: ", name);
    updateDepartment(id, {
      name,
    });
    setShowEdit("");
    // setName("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Department Name</label>
          <input
            placeholder={placeholderz}
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </Form.Field>
        <Button type="submit">Submit Edit</Button>
      </Form>
    </>
  );
};

export default EditDepartmentForm;
