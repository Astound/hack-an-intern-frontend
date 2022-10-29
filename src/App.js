import { Routes, Route } from "react-router-dom"; 
import './App.css'; 
import Notification from "./Components/Notification";
import OrderBook from './Components/OrderBook';
import PlaceOrder from './Components/PlaceOrder';
import TransactionHistory from './Components/TransactionHistory'; 
import Dashboard from './pages/Dashboard';
import Home from "./pages/Home";

function App() {
  return (
     <>  
       <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/transaction-history" element={<TransactionHistory/>} />
        <Route path="/order-book" element={<OrderBook/>} />
        <Route path="/place-order" element={<PlaceOrder/>} /> 
        <Route path="/notification" element={<Notification/>}/>
      </Routes>
     </>
  );
}

export default App;
