import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/Home" exact component={Home}></Route>
        <Route path="/Portfolio" exact component={Portfolio}></Route>
        <Route path="/Pricing" exact component={Pricing}></Route>
        <Route path="/ContactUs" exact component={ContactUs}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
