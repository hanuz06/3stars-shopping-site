import React from "react";
import "./style.ts";

const LandingPage: React.FC = (): JSX.Element => {
  

  return (
    <>
      <nav className="z-depth-0 grey lighten-4">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            <img
              src="img/logo.svg"
              style={{ width: "180px", marginTop: "10px" }}
            ></img>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="logged-in">
              <a
                href="#"
                className="grey-text modal-trigger"
                data-target="modal-account"
              >
                Account
              </a>
            </li>
            <li className="logged-in">
              <a href="#" className="grey-text" id="logout">
                Logout
              </a>
            </li>
            <li className="logged-in">
              <a
                href="#"
                className="grey-text modal-trigger"
                data-target="modal-create"
              >
                Create Guide
              </a>
            </li>
            <li className="logged-out">
              <a
                href="#"
                className="grey-text modal-trigger"
                data-target="modal-login"
              >
                Login
              </a>
            </li>
            <li className="logged-out">
              <a
                href="#"
                className="grey-text modal-trigger"
                data-target="modal-signup"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="modal-signup" className="modal">
        <div className="modal-content">
          <h4>Sign up</h4>
          <br />
          <form id="signup-form">
            <div className="input-field">
              <input type="email" id="signup-email" required />
              <label htmlFor="signup-email">Email address</label>
            </div>
            <div className="input-field">
              <input type="password" id="signup-password" required />
              <label htmlFor="signup-password">Choose password</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0">Sign up</button>
          </form>
        </div>
      </div>

      <div id="modal-login" className="modal">
        <div className="modal-content">
          <h4>Login</h4>
          <br />
          <form id="login-form">
            <div className="input-field">
              <input type="email" id="login-email" required />
              <label htmlFor="login-email">Email address</label>
            </div>
            <div className="input-field">
              <input type="password" id="login-password" required />
              <label htmlFor="login-password">Your password</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0">Login</button>
          </form>
        </div>
      </div>

      <div id="modal-account" className="modal">
        <div className="modal-content center-align">
          <h4>Account details</h4>
          <br />
          <div className="account-details"></div>
        </div>
      </div>

      <div id="modal-create" className="modal">
        <div className="modal-content">
          <h4>Create Guide</h4>
          <br />
          <form id="create-form">
            <div className="input-field">
              <input type="text" id="title" required />
              <label htmlFor="title">Guide Title</label>
            </div>
            <div className="input-field">
              <textarea
                id="content"
                className="materialize-textarea"
                required
              ></textarea>
              <label htmlFor="content">Guide Content</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0">Create</button>
          </form>
        </div>
      </div>

      <div className="container" style={{ marginTop: "40px" }}>
        <ul className="collapsible z-depth-0 guides" style={{ border: "none" }}>
          <li>
            <div className="collapsible-header grey lighten-4">Guide title</div>
            <div className="collapsible-body white">
              Lorem ipsum dolor sit amet.
            </div>
          </li>
          <li>
            <div className="collapsible-header grey lighten-4">Guide title</div>
            <div className="collapsible-body white">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header grey lighten-4">Guide title</div>
            <div className="collapsible-body white">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header grey lighten-4">Guide title</div>
            <div className="collapsible-body white">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LandingPage;
