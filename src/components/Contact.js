import React from "react";
import "../styles/Contact.css";
import Burger from "../asets/banner.png";
const Contact = () => {
  return (
    <div className="contact">
      <div
        style={{ backgroundImage: `url(${Burger})` }}
        className="leftSide"
      ></div>
      <div className="rightSide">
        <h1>Bizimle iletişime geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
        </form>
        <form>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />
        </form>
        <form>
          <label>Mesajınız</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen mesajınızı giriniz"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
