import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { ChartComponent } from '../components/ChartComponent';

export const Main = () => {
  const [days, setDays] = useState();
  console.log(moment(days).format('DD | MM | yyyy'));
  return (
    <Container>
      <Row>
        <Col sm={2} />
        <Col>
          <DayPicker onDayClick={setDays} />
          <ChartComponent />
        </Col>
        <Col sm={2} />
      </Row>
    </Container>
  );
};
