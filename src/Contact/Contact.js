import { Link, useLocation } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const { pathname } = useLocation();
  return (
    <div>
      Contact information:
      <ul>
        <li>LinkedIn: linkedin.com/in/deak-zsolt</li>
        <li>Email: dzsolti1293@gmail.com</li>
      </ul>
    </div>
  );
}

export default Contact;
