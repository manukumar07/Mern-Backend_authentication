import { Link } from "react-router-dom";
import "./Notfound.css"

const Notfound = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="btns">
            <Link to="/">return home</Link>
            {/* <Link to="/contact">report problem</Link> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Notfound