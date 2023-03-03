import React, { useState } from "react";
import "../stylesheet/form.css";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allData, setAllData] = useState([]);
 
    
    
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      let newEntry = { email, password };
      setAllData([...allData, newEntry]);
      setEmail("");
      setPassword("");
    } else {
      alert("please complete your form");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="login-label">email</label> <br />
          <input
            className="login-input"
            type={"email"}
            placeholder="write email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <label className="login-label">password</label> <br />
          <input
            className="login-input"
            type={"password"}
            placeholder="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button className="login-btn" type="submit">
          login
        </button>
      </form>
      <div className="li-div">
        <ul>
          {allData.reverse().map((obj) => {
            return (
              <li>
                <p>{obj.email}</p>
                <p>{obj.password}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Form;
