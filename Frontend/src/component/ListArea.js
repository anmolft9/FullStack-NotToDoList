import React from "react";
import { Col, Row } from "react-bootstrap";
import { TaskList } from "./TaskList";

export const ListArea = ({
  taskList,
  switchTask,
  total,
  handleOnCheck,

  ids,
}) => {
  //only the entry list item
  //   console.log(taskList);

  const entryList = taskList.filter(({ type }) => type === "entry");
  const badList = taskList.filter(({ type }) => type === "bad");

  const badHrs = badList.reduce((acc, item) => acc + +item.hr, 0);

  //   console.log(entryList, taskList);

  return (
    <div className="list-area">
      <Row>
        <Col>
          <TaskList
            name="entry"
            title="entryList"
            arrow="right"
            list={entryList}
            switchTask={switchTask}
            handleOnCheck={handleOnCheck}
            ids={ids}
          />
        </Col>

        <Col>
          <TaskList
            name="bad"
            title="badList"
            list={badList}
            switchTask={switchTask}
            handleOnCheck={handleOnCheck} //for the delete feature passing the id
            ids={ids}
          />

          <div className="">you could have saved {badHrs} hrs</div>
        </Col>
        <div className="text-end">Total time: {total} hrs</div>
      </Row>
    </div>
  );
};
