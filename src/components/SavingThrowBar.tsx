import "./styles/SavingThrowBar.css";
import { Card, Container, Form, Row } from "react-bootstrap";

interface SavingThrowBarProps {
  editModeEnabled: boolean;
}

const SavingThrowBar = ({ editModeEnabled }: SavingThrowBarProps) => {
  return (
    <Card className="character-sheet-cards">
      <Container>
        <Row>
          <h5 className="text-center">
            <b>Saving Throws</b>
          </h5>
        </Row>
        {editModeEnabled ? (
          <Row>
            <p className="text-center">*Select Saving Throw proficiencies*</p>
          </Row>
        ) : null}
        <Row>
          
        </Row>
      </Container>
    </Card>
  );
};

export default SavingThrowBar;
