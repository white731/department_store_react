import { Form, Button } from "semantic-ui-react";
import { useState } from "react";

const DepartmentForm = ({ addDepartment }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log("name: ", name);
    addDepartment({
      name: name,
    });
    setName("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Department Name</label>
          <input
            placeholder="Department Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default DepartmentForm;
