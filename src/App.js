import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import CoinDetails from "./Components/Coins/CoinDetails";
import Coins from "./Components/Coins/Coins";
import BdAddress from "./Components/Contact/BdAddress";
import Contact from "./Components/Contact/Contact";
import UsAddress from "./Components/Contact/UsAddress";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin/:coinId" element={<CoinDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/" element={<Contact />}> 
          <Route path="bd-address" element={<BdAddress />} />
          <Route path="us-address" element={<UsAddress />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
