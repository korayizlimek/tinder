import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-section">
        <h1 className="login-section-title">
          Welcome To Rick Morty Tinder
        </h1>
        <div className="login-section-informations">
          <h2 className="login-section-informations-name">Login</h2>
          <div className="login-section-informations-input">
            <label htmlFor="fname">Adınız:</label>
            <input type="text" className="input input-name" />
          </div>
          <div className="login-section-informations-input">
            <label htmlFor="lname">Soyadınız:</label>
            <input type="text" className="input input-name" />
          </div>
          <div className="login-section-informations-input">
            <label htmlFor="email">E-mail:</label>
            <input type="email" className="input input-name" />
          </div>
          <div className="login-section-informations-input">
            <label htmlFor="password">Şifreniz:</label>
            <input type="password" className="input input-password" />
          </div>
          <button className="login-section-informations-button button">
            Giriş Yap
          </button>
          <p>Henüz hesabınız yok mu? Hemen Kayıt olun</p>
          <button className="login-section-informations-button button">
            Kaydol
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
