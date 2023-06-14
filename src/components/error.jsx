import { Link } from "react-router-dom";
import "../styles/error.css";

const Error = () => {
  return (
    <div className="error_contanier" id="contanier">
      <div className="errorpage" style={{ textAlign: "center" }}>
        <h1>404</h1>
        <h2>Error</h2>
        <h2>Page Not Found</h2>
        <div style={{display:'flex', justifyContent:'center'}}>
        <Link to="/" className="btn" id="btn2" style={{textAlign:'center'}}>
          Home Page
        </Link>
        </div>
      </div>
    </div>
  );
};
export default Error;
