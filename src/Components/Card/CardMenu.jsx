import Items from "../Food/FoodList";
import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
import CounterButton from "../CounterButton/CounterButton";
function CardMenu({ menu }) {
  const [countItem, setCountItem] = useState(0);
  const increamentCounter = () => {
    setCountItem((prevState) => prevState +1);
  }
  const decrementCounter = () => {
    if(countItem > 0){
      setCountItem((prevState) => prevState  - 1);
    }
  }

  return (
    <Card>
      <Card.Img variant="top" src={menu.src} className="cardIMG" />
      <Card.Body>
        <Card.Title>{menu.itemName}</Card.Title>
        <Card.Text>{menu.details}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {
          countItem <= 0 ? (
            <Button variant="primary" onClick={increamentCounter}>Add to Cart</Button>
          ) : (
            <CounterButton increameHandler = {increamentCounter} count = {countItem} decrementHandler ={decrementCounter}/>
          )
        }
        
        <div style={{display: 'inline'}}>
           Rs : {menu.price}
        </div>
      </Card.Footer>
    </Card>
  );
}
export default CardMenu;
