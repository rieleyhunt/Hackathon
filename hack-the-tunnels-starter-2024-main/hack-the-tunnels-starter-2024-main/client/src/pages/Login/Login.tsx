import { useState } from "react";
import { useAccountContext } from "../../context";
import { Base as Layout } from "@/layouts";
import "./Login.style.scss";

function Login() {
  const [email, setEmail] = useState(""); // Store email input
  const [password, setPassword] = useState(""); // Store password input
  const [message, setMessage] = useState(null); // Store error/success message

  const { login } = useAccountContext();
  const navigate = useNavigate(); 

  const attemptLogin = async () => {
    try {
      const result = await login(email, password); // Use custom inputs
      if (result === "Login successful") {
        setMessage(null); // Clear any previous message
        navigate("/dashboard"); // Navigate to dashboard on success
      } else {
        setMessage("Invalid email or password. Please try again."); // Error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <Layout>
      <div className="Login"></div>
      <div className="Login__panel">
        <div className="Login__panel__content">
          <img src="/carleton_logo_black.png"></img>
          <div className="Login__panel__content__message">
            <div>Welcome to the Carleton SSO çawdawdwd</div>
            <div>
              Enter your{" "}
              <a href="https://myone.carleton.ca" target="blank">
                MyCarletonOne
              </a>{" "}
              username and password.
            </div>
          </div>
          {message && <p>{message}</p>}
          <div className="Login__panel__content__input">
            <input type="text" placeholder="MyCarletonOne username"></input>
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="Login__panel__content__checkbox">
            <input type="checkbox"></input>
            <label>Keep me signed in</label>
          </div>
          <button
            className="Login__panel__button"
            onClick={() => attemptLogin()}
          >
            Sign In
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;