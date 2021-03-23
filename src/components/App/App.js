import './App.scss';
import {useState} from 'react';
import { Button, Container, Row, Col, Jumbotron, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
//import reactDom from 'react-dom';

//component for rendering the lists in every column
import TaskList from '../TaskList/TaskList.js';
//component for adding a new task
import NewTask from '../NewTask/NewTask.js';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [doings, setDoings] = useState([]);
  const [dones, setDones] = useState([]);

  // adds the new task to the state of todos
  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = todos.slice();
    temp.push(task);
    setTodos(temp);
    setTask('')
  }
  //handles change in the enter new task field
  const handleChange = event => {
    setTask(event.target.value);
  }

  //take the task that was clicked and pass it to doings, also delete from todos
  const handleToDoClick = event => {
    const task = event.target.parentElement.firstChild.textContent;
    //add to doings
    setDoings(prevstate => [...prevstate, task]);
    //remove from todos
    let new_todos = [];
    todos.forEach(todos_task => {
      if (todos_task !== task)
      {
        new_todos.push(todos_task)
      }
    })
    setTodos(new_todos);
  }

  //take the task that was clicked and pass it to dones, also delete from doings
  const handleDoingClick = event => {
    const task = event.target.parentElement.firstChild.textContent;
    //add to dones
    setDones(prevstate => [task, ...prevstate]);
    //remove from doings
    let new_doings = [];
    doings.forEach(doings_task => {
      if (doings_task !== task)
      {
        new_doings.push(doings_task)
      }
    })
    setDoings(new_doings);
  }

  //remove the clicked task from dones
  const handleDoneClick = event => {
    const task = event.target.parentElement.firstChild.textContent;
    let new_dones = [];
    dones.forEach(dones_task => {
      if (dones_task !== task) {
        new_dones.push(dones_task)
      }
    })
    setDones(new_dones);
  }

  return (
    <Container fluid className="app p-0 bg-light">
      <Jumbotron className="bg-info">
        <h1 className="text-light text-center">My kanban board</h1>
      </Jumbotron>
      <NewTask handleSubmit={ handleSubmit } handleChange={ handleChange } task={ task } />
      <Row className="no-gutters">
        <Col className="border-right border-dark vl">
          <TaskList tasks={todos} title="To do" handleClick={ handleToDoClick } button_title="Start" />
        </Col>
        <Col className="border-right border-dark vl">
          <TaskList tasks={doings} title="Doing" handleClick={ handleDoingClick } button_title="Finish"/>
        </Col>
        <Col>
          <TaskList tasks={dones} title="Done" handleClick={ handleDoneClick } button_title="Remove" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
