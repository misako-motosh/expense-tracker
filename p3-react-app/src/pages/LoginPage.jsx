import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Conditions when logging in
    if (!username) {
      setError("Username should not be blank. Please try again.");
    } else if (!password) {
      setError("Password should not be blank. Please try again.");
    } else if (password.length < 8) {
      setError("The password should have at least 8 characters.");
    } else {
      setError(null);
      alert("Login successful!");
      setUsername('');
      setPassword('');
      navigate("/home")
    }
  };

  return (
    <>
      <div className="login-background">
        <form onSubmit={handleLogin} className="login-form">
          <h1 className='dark-font'>Login</h1>
          <label className="login-label dark-font">Username</label>
          <br/>
          <input 
            type='text' 
            value={username}
            placeholder='Enter your username here' 
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <br/>
          <label className="login-label dark-font">Password</label>
          <br />
          <input 
            type='password'
            value={password}
            placeholder='Enter your password here'
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <br />
          <button type='submit' id='login-button'>Login</button>
          <div>{error && <div className="error dark-font">{error}</div>}</div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
