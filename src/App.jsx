import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Profile from "./components/Profile";
import Product from "./components/Product";
import Recipe from "./components/Recipe";

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Profile name='Quackie Makers' job="Makers' favourite rubber duck" birthdate='2013'/>
      <Product name="Air Fryer K2000" description="The best air fryer to fry all things, even Mars bars" price={2000}/>
      <Product name="Smart Blender X500" description="A high-tech blender that makes smoothies, soups, and more with just one touch" price={150}/>
      <Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />
    </>
  );
}

export default App;
