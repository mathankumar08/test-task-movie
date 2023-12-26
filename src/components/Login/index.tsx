
function Login() {
  return (
    <div className="login">
      <div>Sign In</div>
      <div>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div>
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;