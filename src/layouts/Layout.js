import React from 'react';
import {
  Form, Col, Button, Card,
} from 'react-bootstrap';

function Layout() {
  return (
    <Card className="p-5">
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name..." />
          </Col>
          <Col>
            <Form.Control placeholder="Last name..." />
          </Col>
          <Col>
            <Button>Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    </Card>

  );
}

export default Layout;
