import "./App.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import ContentArea from "./components/Contents/ContentArea";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <Navbar />
      <ContentArea />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
