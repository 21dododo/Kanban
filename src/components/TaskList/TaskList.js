import './TaskList.scss';
import {useState} from 'react';
import { Button, Container, Row, Col, Jumbotron, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

function TaskList(props) {
  const tasks = props.tasks
  return(
    <Container fluid className="Task-list px-0" >
      <h1 className="text-center">{ props.title }</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="task-wrap">
              <span>{ task }</span>
              <Button className="action-btn" onClick={ props.handleClick }>{ props.button_title }</Button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
  }

  export default TaskList;