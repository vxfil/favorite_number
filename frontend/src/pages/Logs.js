import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { GET_LOGS_REQUESTED } from '../redux/actions/favNumAction';
import moment from 'moment';

export const Logs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_LOGS_REQUESTED });
  }, [dispatch]);
  const logs = useSelector((state) => state.favNumReducer.logs);
  console.log(logs);
  return (
    <Row>
      <Col sm={2} />
      <Col>
        <ListGroup className="mt-3">
          {logs.map((log) => {
            return (
              <ListGroup.Item action variant="info" key={log._id}>
                {`${moment(log.date).format('DD-MM-YYYY hh:mm')} ${log.url} ${
                  log.json
                }`}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
      <Col sm={2} />
    </Row>
  );
};
