import "./App.css";
import { foodList } from "./Components/Food/FoodList";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./Components/NavBar/NavBarComponent";
import Footer from "./Components/Footer/Footer";

function App() {
  // return <div className="App">
  //  {
  //   // console.log(foodList[0].itemName)
  //   foodList.map(item => 
  //   (
  //     //  console.log(item.itemName)
  //       <div>
  //         <div>{item.itemName}</div>
  //         <div>
  //           <img src={item.src} width='300px' height='300px'/>
  //           {/* {console.log(item.src)} */}
  //         </div>
  //         <div>{item.price}</div>
  //       </div>
  //   )
  //   )
  //  }
  // </div>;

  return (
    <>
    <NavBarComponent/>
    <Footer/>
    </>
  );

}

export default App;
