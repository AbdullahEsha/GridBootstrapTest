import React from "react";
import { Container, Row, Col, Button, Form, Image  } from 'react-bootstrap';
import "../Assets/style.css";

const Login = () => {
return (
  <div className="full">
    <Container>
      <Row>
        <Col>
        <h3 className="level">Login</h3>
        </Col>
      </Row>
       <Row>
        <Col>
        <Image className="picture" src="https://image.flaticon.com/icons/png/512/3135/3135715.png" alt="picture"/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Control type="text" placeholder="User Name" className="txt"/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Control type="password" placeholder="Password" className="txt"/>
        </Col>
      </Row>
      <Row>
        <Col><Button className="btn-group__item">Login</Button>
        <Button className="btn-group__item">Signup</Button></Col>
      </Row>
  
    </Container>
  </div>
);
};

export default Login;