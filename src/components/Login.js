import React from "react";

const Login = () => {
  return (
    <div>
      <div className="inc-exp-container">
        <form id="signup">
          <div className="inc-container">
            <label htmlFor="amount">
              Email <br />
              <small></small>
            </label>
            <input
              type="text"
              // value={state.amount}
              placeholder="Eg. example@gmail.com"
              // onChange={handleAmountInput}
            />
          </div>
          <div className="exp-container">
            <label htmlFor="amount">
              Password <br />
              <small></small>
            </label>
            <input
              type="text"
              // value={state.amount}
              placeholder="Enter password"
              // onChange={handleAmountInput}
            />
          </div>
        </form>
      </div>
      <button className="btn">Login</button>
    </div>
  );
};

export default Login;
