import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Card,
  CardTitle,
} from "react-bootstrap";

interface HitDiceListProps {
  currentHitDice: {
    d6: number;
    d8: number;
    d10: number;
    d12: number;
  };
  maxHitDice: {
    d6: number;
    d8: number;
    d10: number;
    d12: number;
  };
  setCurrentHitDice: (val: {
    d6: number;
    d8: number;
    d10: number;
    d12: number;
  }) => void;
  setMaxHitDice: (val: {
    d6: number;
    d8: number;
    d10: number;
    d12: number;
  }) => void;

  editModeEnabled: boolean;
}

const HitDiceList = ({
  currentHitDice,
  maxHitDice,
  setCurrentHitDice,
  setMaxHitDice,
  editModeEnabled,
}: HitDiceListProps) => {
  return (
    <Card className="hit-dice-card">
        <CardTitle className="text-center">Hit Dice</CardTitle>
      {editModeEnabled ? (
        <Container>
          <Row>
            <Col xs={3}>
              <p>Current d6:</p>
              <input
                type="number"
                className="form-control"
                defaultValue={currentHitDice.d6}
                onChange={(event) =>
                  setCurrentHitDice({
                    ...currentHitDice,
                    d6: event.target.valueAsNumber,
                  })
                }
              ></input>
            </Col>
            <Col xs={3}>
              <p>Current d8:</p>
              <input
                type="number"
                className="form-control"
                defaultValue={currentHitDice.d8}
                onChange={(event) =>
                  setCurrentHitDice({
                    ...currentHitDice,
                    d8: event.target.valueAsNumber,
                  })
                }
              ></input>
            </Col>
            <Col xs={3}>
              <p>Current d10:</p>
              <input
                type="number"
                className="form-control"
                defaultValue={currentHitDice.d10}
                onChange={(event) =>
                  setCurrentHitDice({
                    ...currentHitDice,
                    d10: event.target.valueAsNumber,
                  })
                }
              ></input>
            </Col>
            <Col xs={3}>
              <p>Current d12:</p>
              <input
                type="number"
                className="form-control"
                defaultValue={currentHitDice.d12}
                onChange={(event) =>
                  setCurrentHitDice({
                    ...currentHitDice,
                    d12: event.target.valueAsNumber,
                  })
                }
              ></input>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <p>Max d6:</p>
              <input
                type="number"
                className="form-control"
                defaultValue={maxHitDice.d6}
                onChange={(event) =>
                  setMaxHitDice({
                    ...maxHitDice,
                    d6: event.target.valueAsNumber,
                  })
                }
              ></input>
            </Col>
            <Col xs={3}>
              <p>Max d8:</p>
              <input
                type="number"
                className="form-control"
                defaultValue={maxHitDice.d8}
                onChange={(event) =>
                  setMaxHitDice({
                    ...maxHitDice,
                    d8: event.target.valueAsNumber,
                  })
                }
              ></input>
            </Col>
            <Col xs={3}>
              <p>Max d10:</p>
              <input
                type="number"
                className="form-control"
                defaultValue={maxHitDice.d10}
                onChange={(event) =>
                  setMaxHitDice({
                    ...maxHitDice,
                    d10: event.target.valueAsNumber,
                  })
                }
              ></input>
            </Col>
            <Col xs={3}>
              <p>Max d12:</p>
              <input
                type="number"
                className="form-control"
                defaultValue={maxHitDice.d12}
                onChange={(event) =>
                  setMaxHitDice({
                    ...maxHitDice,
                    d12: event.target.valueAsNumber,
                  })
                }
              ></input>
            </Col>
          </Row>
        </Container>
      ) : (
        <ListGroup className="list-group-flush">
          {maxHitDice.d6 > 0 ? (
            <ListGroupItem>
              <div className="row">
                <div className="col-auto">d6</div>
                <div className="col-auto ms-auto">
                  {currentHitDice.d6 + "/" + maxHitDice.d6}
                </div>
              </div>
            </ListGroupItem>
          ) : null}

          {maxHitDice.d8 > 0 ? (
            <ListGroupItem>
              <div className="row">
                <div className="col-auto">d8</div>
                <div className="col-auto ms-auto">
                  {currentHitDice.d8 + "/" + maxHitDice.d8}
                </div>
              </div>
            </ListGroupItem>
          ) : null}

          {maxHitDice.d10 > 0 ? (
            <ListGroupItem>
              <div className="row">
                <div className="col-auto">d10</div>
                <div className="col-auto ms-auto">
                  {currentHitDice.d10 + "/" + maxHitDice.d10}
                </div>
              </div>
            </ListGroupItem>
          ) : null}

          {maxHitDice.d12 > 0 ? (
            <ListGroupItem>
              <div className="row">
                <div className="col-auto">d12</div>
                <div className="col-auto ms-auto">
                  {currentHitDice.d12 + "/" + maxHitDice.d12}
                </div>
              </div>
            </ListGroupItem>
          ) : null}
        </ListGroup>
      )}
    </Card>

    //     <Accordion defaultActiveKey="0">
    //       <Accordion.Item eventKey="0">
    //         <Accordion.Header>
    //           <div className="d-flex w-100 justify-content-between">
    //             <div>Hit Dice</div>
    //             <div>
    //               {currentHitDice.d6 +
    //                 currentHitDice.d8 +
    //                 currentHitDice.d10 +
    //                 currentHitDice.d12 +
    //                 "/" +
    //                 (maxHitDice.d6 +
    //                   maxHitDice.d8 +
    //                   maxHitDice.d10 +
    //                   maxHitDice.d12)}
    //             </div>
    //           </div>
    //         </Accordion.Header>
    //         <Accordion.Body>

    //         </Accordion.Body>
    //       </Accordion.Item>
    //       {/* More accordion items here */}
    //     </Accordion>
    //   );
  );
};

export default HitDiceList;
