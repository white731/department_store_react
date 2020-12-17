import { Form, Button } from "semantic-ui-react";
import { useState } from "react";

const DepartmentForm = ({ updateDepartment, id }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log("name: ", name);
    updateDepartment(id, {
      name,
    });
    // setName("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Department Name</label>
          <input
            placeholder={name}
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

export default DepartmentForm;
