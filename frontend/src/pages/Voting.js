import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  ButtonToolbar,
  ButtonGroup,
  Alert,
  Container,
} from "react-bootstrap";

import { SET_NUMBER, VOTE_REQUESTED } from "../redux/actions/favNumAction";

export const Voting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.favNumReducer.message.message);
  const loading = useSelector((state) => state.favNumReducer.loading);
  const currentNumber = useSelector(
    (state) => state.favNumReducer.currentNumber
  );

  const generateArray = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <Container>
      <Row>
        <Col sm={2} />
        <Col className="d-flex justify-content-center flex-column align-items-center align-middle mt-3">
          {message ? <Alert variant="info">{message}</Alert> : null}
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup>
              {generateArray(9).map((btn) => {
                return (
                  <Button
                    key={btn + 1}
                    id={btn + 1}
                    variant="light"
                    onClick={(event) =>
                      dispatch({
                        type: SET_NUMBER,
                        payload: event.currentTarget.id,
                      })
                    }
                  >
                    {btn + 1}
                  </Button>
                );
              })}
              {/* <Button
                onClick={(event) =>
                  dispatch({
                    type: SET_NUMBER,
                    payload: event.currentTarget.id,
                  })
                }
                id="One"
                size="lg"
                variant="light"
                style={{ backgroundColor: '#E38627' }}
              >
                <span style={{ color: 'whitesmoke' }}>1</span>
              </Button>
              <Button
                onClick={(event) =>
                  dispatch({
                    type: SET_NUMBER,
                    payload: event.currentTarget.id,
                  })
                }
                id="Two"
                size="lg"
                variant="light"
                style={{ backgroundColor: '#C13C37' }}
              >
                <span style={{ color: 'whitesmoke' }}>2</span>
              </Button>
              <Button
                onClick={(event) =>
                  dispatch({
                    type: SET_NUMBER,
                    payload: event.currentTarget.id,
                  })
                }
                id="Three"
                size="lg"
                variant="light"
                style={{ backgroundColor: '#6A2135' }}
              >
                <span style={{ color: 'whitesmoke' }}>3</span>
              </Button>
              <Button
                onClick={(event) =>
                  dispatch({
                    type: SET_NUMBER,
                    payload: event.currentTarget.id,
                  })
                }
                id="Four"
                size="lg"
                variant="light"
                style={{ backgroundColor: '#5d3178' }}
              >
                <span style={{ color: 'whitesmoke' }}>4</span>
              </Button>
              <Button
                onClick={(event) =>
                  dispatch({
                    type: SET_NUMBER,
                    payload: event.currentTarget.id,
                  })
                }
                id="Five"
                size="lg"
                variant="light"
                style={{ backgroundColor: '#884c7c' }}
              >
                <span style={{ color: 'whitesmoke' }}>5</span>
              </Button>
              <Button
                onClick={(event) =>
                  dispatch({
                    type: SET_NUMBER,
                    payload: event.currentTarget.id,
                  })
                }
                id="Six"
                size="lg"
                variant="light"
                style={{ backgroundColor: '#08baac' }}
              >
                <span style={{ color: 'whitesmoke' }}>6</span>
              </Button>
              <Button
                onClick={(event) =>
                  dispatch({
                    type: SET_NUMBER,
                    payload: event.currentTarget.id,
                  })
                }
                id="Seven"
                size="lg"
                variant="light"
                style={{ backgroundColor: '#6d07df' }}
              >
                <span style={{ color: 'whitesmoke' }}>7</span>
              </Button>
              <Button
                onClick={(event) =>
                  dispatch({
                    type: SET_NUMBER,
                    payload: event.currentTarget.id,
                  })
                }
                id="Eighth"
                size="lg"
                variant="light"
                style={{ backgroundColor: '#1a2157' }}
              >
                <span style={{ color: 'whitesmoke' }}>8</span>
              </Button>
              <Button
                onClick={(event) =>
                  dispatch({
                    type: SET_NUMBER,
                    payload: event.currentTarget.id,
                  })
                }
                id="Nine"
                size="lg"
                variant="light"
                style={{ backgroundColor: '#199ed0' }}
              >
                <span style={{ color: 'whitesmoke' }}>9</span>
              </Button> */}
            </ButtonGroup>
          </ButtonToolbar>
          {currentNumber ? (
            <Button
              type="submit"
              onClick={() => dispatch({ type: VOTE_REQUESTED })}
            >
              {loading ? "Loading ... " : "Vote"}
            </Button>
          ) : (
            <Button disabled>Vote</Button>
          )}
        </Col>
        <Col sm={2} />
      </Row>
    </Container>
  );
};
