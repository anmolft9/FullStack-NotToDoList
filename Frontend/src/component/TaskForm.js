import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Button from "react-bootstrap/Button";
// import { v4 as uuidv4 } from "uuid";

const initialState = {
  task: "",
  hr: "",
  type: "entry",
};
export const TaskForm = ({ addTask }) => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  // console.log(form);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // addTask({ ...form, id: uuidv4() }); //id :uuidv4
    addTask(form); //id :uuidv4

    // console.log(form);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="g-3">
        <Col md="6">
          <Form.Control
            name="task"
            placeholder="Task"
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Form.Control
            name="hr"
            placeholder="hours"
            type="number"
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
