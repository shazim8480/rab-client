import "./App.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import ContentArea from "./components/Contents/ContentArea";

function App() {
  return (
    <div className="App">
      <Hero />
      <Header />
      {/* <Content /> */}
      <ContentArea />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
