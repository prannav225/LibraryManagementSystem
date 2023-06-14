import { Link } from "react-router-dom";
import "../styles/landingpage.css";
const Landingpage = () => {
  return (
    <div className="page">

      <div className="header">
        <img src="images/logo.png" alt="LMS logo" width={"150px"} height={'60px'} />
        <div>
          <Link to="/admin-login" className="btn" id="btn1">
            Admin Login
          </Link>
        </div>
      </div>

      <div className="text">
        <h1 className="welcome" style={{ color: " #088a6b" }}>
          Discover the Best Books !
        </h1>
        <h3 className="welcome1">
          There is more Treasure in books than in all the Pirate's loot on <span className="caption"> TREASURE ISLAND !</span>
        </h3>
      </div>

      <div className="buttons">
        <div style={{margin:0, padding:0}}>
        <Link to="/user-login" className="btn" id="btn2">
          User Login
        </Link>
        </div>
        <div style={{marginLeft:'20px'}}>
        <p>
          Don't have an account? <a href="/user-signup" style={{color:'#088a6b', fontWeight:'bold'}}>Register Now!</a>
        </p>
        </div>
      </div>

    </div>
  );
};

export default Landingpage;
