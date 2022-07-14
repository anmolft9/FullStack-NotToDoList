import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export const TaskList = ({
  title,
  arrow,
  list = [],
  switchTask,
  handleOnCheck,
  name,
  ids,
}) => {
  // console.log(switchTask);
  return (
    <div>
      <h2 className="text-center">{title}</h2>
      <Table striped>
        <thead>
          <tr>
            <th>
              <Form.Check
                type="checkbox"
                label=""
                value={name}
                onChange={handleOnCheck}
              />
            </th>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => {
            ///the template to use on the todo list displaying through map
            return (
              <tr>
                <td>
                  <Form.Check
                    type="checkbox"
                    label=""
                    value={item._id}
                    checked={ids.includes(item._id)}
                    onChange={handleOnCheck}
                  />
                </td>

                <td>{item.task}</td>
                <td>{item.hr}</td>

                <td>
                  {arrow === "right" ? (
                    <Button
                      onClick={() => switchTask(item._id, "bad")} //sending the name as well
                      variant="success"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => switchTask(item._id, "entry")}
                      variant="danger"
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
