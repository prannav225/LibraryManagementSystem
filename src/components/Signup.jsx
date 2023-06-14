import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");
  let [phonenumber, setPhonenumber] = useState("");
  let [password, setpassword] = useState("");
  let [confirmpassword, setconfirmpassword] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    
      //data to be posted
      let userData = { name, age, email, phonenumber, password };

      //posting to server
      fetch("http://localhost:2000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      alert("Registered successfully");
      navigate("/user-login");
  };

  let navigate = useNavigate();
  return (
    <div className="page">
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <div className="addbook" id="contanier">
        <div className="form" onSubmit={handleSubmit}>
          <form action="">
            <div className="name">
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="age">
              <input
                type="number"
                placeholder="Enter your age"
                min={12}
                max={100}
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="Enter your mail id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="phonenumber">
              <input
                type="tel"
                placeholder="PhoneNumber"
                minLength={10}
                maxLength={10}
                required
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="confirm-password">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
            </div>
            <button className="btn">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
