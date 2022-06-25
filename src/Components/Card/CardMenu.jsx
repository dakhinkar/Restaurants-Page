import Items from "../Food/FoodList";
import { Card, Button } from "react-bootstrap";
function CardMenu({ menu }) {
  return (
    <Card>
      <Card.Img variant="top" src={menu.src} className="cardIMG" />
      <Card.Body>
        <Card.Title>{menu.itemName}</Card.Title>
        <Card.Text>{menu.details}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button variant="primary">Add to Cart</Button>
        <div style={{display: 'inline'}}>
           Rs : {menu.price}
        </div>
      </Card.Footer>
    </Card>
  );
}
export default CardMenu;
