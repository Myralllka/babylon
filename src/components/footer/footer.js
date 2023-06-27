import React from "react";
import { Link } from "react-router-dom";
import "../Iconfont/Iconsfont.scss";
import '../Iconfont/Style_debts.scss'
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer__menu">
      <div className="footer__container">
      <div className="footer__link link__active">
          <Link to='/'class="_icon-Home"></Link>
          <div className="footer__link-title">
            Home</div>
        </div>
        <div className="footer__link">          
          <Link to="Transaction" class="_icon-Transaction"></Link>
          <div className="footer__link-title">Transaction</div>
        </div>
        <div className="footer__link">
          <Link to="Debts" class="icon-DebtUS"></Link>
          <div className="footer__link-title">
            Debts</div>
        </div>
        <div className="footer__link">
           <Link to="Savings" class="_icon-Savings"></Link>
           <div className="footer__link-title">Savings</div>
        </div>
        <div className="footer__link">
          <Link to="Settings" class="_icon-Settings"></Link>
          <div className="footer__link-title">Settings</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
