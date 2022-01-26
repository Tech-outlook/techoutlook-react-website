import { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <nav className="fixed-top">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Tech outlook</label>
        <ul>
          <li>
            <Link to="../Home">Home</Link>
          </li>
          <li>
            <Link to="../Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="../Pricing">Pricing</Link>
          </li>
          <li>
            <Link to="../ContactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
