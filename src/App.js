import './App.css';
import {useState} from 'react';
import { Button, Container, Row, Col, Jumbotron, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
//import reactDom from 'react-dom';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`the new task is ${task}`)
    const temp = todos.slice();
    temp.push(task);
    setTodos(temp);
  }
  const handleChange = (event) => {
    setTask(event.target.value);
  }
  return (
    <Container fluid className="p-0 bg-light">
      <Jumbotron className="bg-info">
        <h1 className="text-light text-center">My kanban board</h1>
      </Jumbotron>
      <NewTask handleSubmit={ handleSubmit } handleChange={ handleChange } task={ task } />
      <Row className="no-gutters">
        <Col className="border-right border-dark vl">
          <Todo todos={todos} title="To do" />
        </Col>
        <Col className="border-right border-dark vl">
          <Doing title="Doing" />
        </Col>
        <Col>
          <Done title="Done" />
        </Col>
      </Row>
    </Container>
  );
}

function NewTask(props) {
  const task = props.task;
  const handleSubmit = props.handleSubmit;
  const handleChange = props.handleChange;

  return(
    <Container fluid>
      <Form inline onSubmit={handleSubmit}>
        <Form.Label>
          New Task
        </Form.Label>
        <Form.Control
          id="new_task"
          placeholder="Enter new task"
          value={task}
          onChange={handleChange}
        />
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

function Todo(props) {
  const todos = props.todos
  return(
    <Container fluid className="px-0" >
      <h1 className="text-center">{ props.title }</h1>
      <ul>
        {todos.map((todo) => (
          <li>{ todo } </li>
        ))}
      </ul>
    </Container>
  )
}

function Doing(props) {
  return(
    <Container fluid className="px-0" >
      <h1 className="text-center">{props.title}</h1>
      <ul>
        <li>text text text</li>
      </ul>
    </Container>
  )
}

function Done(props) {
  return(
    <Container fluid className="px-0" >
      <h1 className="text-center">{props.title}</h1>
      <ul>
      <li>text text text</li>
      </ul>
    </Container>
  )
}


export default App;
