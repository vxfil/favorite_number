import React from 'react';
import { Row, Col, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

export const Voting = () => {
  return (
    <Row>
      <Col sm={2} />
      <Col>
        <h1>Vote for your favorite number</h1>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="mr-2">
            <Button
              size="lg"
              variant="light"
              style={{ backgroundColor: '#E38627' }}
            >
              <span style={{ color: 'whitesmoke' }}>1</span>
            </Button>
            <Button
              size="lg"
              variant="light"
              style={{ backgroundColor: '#C13C37' }}
            >
              <span style={{ color: 'whitesmoke' }}>2</span>
            </Button>
            <Button
              size="lg"
              variant="light"
              style={{ backgroundColor: '#6A2135' }}
            >
              <span style={{ color: 'whitesmoke' }}>3</span>
            </Button>
            <Button
              size="lg"
              variant="light"
              style={{ backgroundColor: '#5d3178' }}
            >
              <span style={{ color: 'whitesmoke' }}>4</span>
            </Button>
            <Button
              size="lg"
              variant="light"
              style={{ backgroundColor: '#884c7c' }}
            >
              <span style={{ color: 'whitesmoke' }}>5</span>
            </Button>
            <Button
              size="lg"
              variant="light"
              style={{ backgroundColor: '#08baac' }}
            >
              <span style={{ color: 'whitesmoke' }}>6</span>
            </Button>
            <Button
              size="lg"
              variant="light"
              style={{ backgroundColor: '#6d07df' }}
            >
              <span style={{ color: 'whitesmoke' }}>7</span>
            </Button>
            <Button
              size="lg"
              variant="light"
              style={{ backgroundColor: '#1a2157' }}
            >
              <span style={{ color: 'whitesmoke' }}>8</span>
            </Button>
            <Button
              size="lg"
              variant="light"
              style={{ backgroundColor: '#199ed0' }}
            >
              <span style={{ color: 'whitesmoke' }}>9</span>
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
      <Col sm={2} />
    </Row>
  );
};
