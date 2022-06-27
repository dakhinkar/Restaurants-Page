import {Button} from 'react-bootstrap';
import './CounterButton.css';
function CounterButton(props){
    
    return (
        <div>
            <Button variant="primary" className='btn-xcv' onClick={props.decrementHandler} >--</Button>
            <span>{props.count}</span>
            <Button variant="primary" className='btn-xcv' onClick={props.increameHandler}>+</Button>
        </div>
    )
}

export default CounterButton;