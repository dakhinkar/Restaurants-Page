import foodList from "../Food/FoodList";
import Card from "./CardMenu";
import { Container, Row, Col } from "react-bootstrap";

import './MenuItem.css';

function MenuItem(props) {
  console.log(foodList);
  return (
      <Container>
        <Row md={5}>
          {props.food.map((menuItem, index) => (
            <Col md={3} className='colwidth'>
              <Card menu={menuItem} key={index} />
            </Col>
          ))}
        </Row>
      </Container>
  );
}
export default MenuItem;
