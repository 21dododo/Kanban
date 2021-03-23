import './NewTask.scss';
import {useState} from 'react';
import { Button, Container, Row, Col, Jumbotron, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';


function NewTask(props) {
    const task = props.task;
    const handleSubmit = props.handleSubmit;
    const handleChange = props.handleChange;
  
    return(
      <Container fluid className="NewTask">
        <Form inline onSubmit={handleSubmit}>
          <Form.Label>
            New Task:
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

  export default NewTask;