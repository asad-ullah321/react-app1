//import logo from './logo.svg';
//import './App.css';
import NavBar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mainimg } from "./components/Mainimg/Mainimg";
import ServiceSection from "./components/Services/Services";
import  AllServices  from "./components/AllServices/AllServices";
import { Standings } from "./components/Standings/Standings";
import { Prices } from "./components/Prices/Prices";
import { Videos } from "./components/Videos/Videos";
import { Feedback } from "./components/Feedback/Feedback";
import { Associations } from "./components/Associations/Associations";
import { Contactinfo } from "./components/Contactinfo/Contactinfo";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Mainimg/>
      <ServiceSection 
      imgsrc="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/car_repair_shop-13_comp.jpg"/>
      <AllServices/>
      <Standings></Standings>
      <Prices></Prices>
      <Videos/>
      <Feedback/>
      <Associations/>
      <Contactinfo imgsrc="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/Call_icon.png"/>
      <Footer/>
    </div>
  );
}

export default App;
