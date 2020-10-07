import React, { useEffect } from 'react';
import { Row, Col, Button, Alert, Container } from 'react-bootstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { ChartComponent } from '../components/ChartComponent';
import {
  GET_PIECHARTS_REQUESTED,
  SET_DATE,
  SET_ERROR,
} from '../redux/actions/favNumAction';

export const Main = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.favNumReducer.loading);
  const error = useSelector((state) => state.favNumReducer.error);
  const charts = useSelector((state) => state.favNumReducer.pieCharts);

  useEffect(() => {
    dispatch({ type: GET_PIECHARTS_REQUESTED });
  }, [dispatch]);

  return (
    <Container className="mt-3">
      <Row>
        <Col sm={4}>
          {error ? (
            <Alert
              variant="danger"
              dismissible
              onClose={() => dispatch({ type: SET_ERROR, payload: '' })}
            >
              {error}
            </Alert>
          ) : null}
          <DayPicker
            onDayClick={(date) =>
              dispatch({
                type: SET_DATE,
                payload: moment(date).format('DD-MM-YYYY'),
              })
            }
          />
          <Button
            type="submit"
            onClick={() => dispatch({ type: GET_PIECHARTS_REQUESTED })}
          >
            {loading ? 'Loading ... ' : 'Refresh diagram'}
          </Button>
        </Col>
        <Col sm={8}>
          <ChartComponent charts={charts} />
        </Col>
      </Row>
    </Container>
  );
};
