import React from "react";
import { Col, Row } from "react-bootstrap";
import api from "../utils/api";

const TodoItem = ({ item, deleteTask, isDoneTask }) => {
  
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button className="button-delete" onClick={()=>deleteTask(item._id)}>
              삭제
            </button>
            <button className="button-delete" onClick={()=>isDoneTask(item._id)}>
              끝남
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
