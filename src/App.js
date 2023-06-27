import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style/style.scss";
import "./style/colours.scss";
import "./style/style.scss";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home";
import Debts from "./pages/Debts/Debts";
import Transaction from "./pages/Transaction/Transaction";
import MenuSettings from "./pages/MenuSettings/MenuSettings";
import Savings from "./pages/Savings/Savings";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Routes>
        <Route path="Profile" element={<Profile />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="Debts" element={<Debts />}></Route>
        <Route path="Transaction" element={<Transaction />}></Route>
        <Route path="Settings" element={<MenuSettings />}></Route>
        <Route path="Savings" element={<Savings />}></Route>
      </Routes>
    </div>
  );
}

export default App;
