import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../data/db.json";
import '../styles/adminlogin.css';

const Userlogin = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let login = (e) => {
    e.preventDefault();

    // Find user with matching email and password in the JSON data
    const user = usersData.users.find(
      (userData) => userData.email === email && userData.password === password
    );

    if (user) {
      // User found, navigate to /user/ with user ID as parameter
      navigate(`/user/`);
    } else {
      // User not found, display an alert
      alert("Wrong credentials");
    }
  };

  return (
    <div className="page">
      <div id="contanier" className="admin_contanier">
        <h1 className="heading" style={{ textAlign: 'center' }}>Login as User</h1>
        <div className="form">
          <form action="" onSubmit={login}>
            <div className="mail">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
