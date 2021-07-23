import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-section">
        <h1 className="login-title">Welcome To Rick Morty Tinder</h1>
        <div className="login-informations">
          <h2 className="login-information-name">Login</h2>
          <div className="login-information-input">
            <label htmlFor="fname">Adınız:</label>
            <input type="text" className="input input-name" />
          </div>
          <div className="login-information-input">
            <label htmlFor="lname">Soyadınız:</label>
            <input type="text" className="input input-name" />
          </div>
          <div className="login-information-input">
            <label htmlFor="email">E-mail:</label>
            <input type="email" className="input input-name" />
          </div>
          <div className="login-information-input">
            <label htmlFor="password">Şifreniz:</label>
            <input type="password" className="input input-password" />
          </div>
          <button className="button user-btn">Giriş Yap</button>
          <p>Henüz hesabınız yok mu? Hemen Kayıt olun</p>
          <button className="button user-btn">Kaydol</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
