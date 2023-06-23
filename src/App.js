import React from 'react';
import { Routes, Route } from "react-router-dom";
import './style/style.scss';
import './style/colours.scss';
import './style/style.scss';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Main from './components/Main/Main';
import Home from './pages/Home/Home';
import Debts from './pages/Debts/Debts';
import Transaction from './pages/Transaction/Transaction';
import MenuSettings from './pages/MenuSettings/MenuSettings';
import Savings from './pages/Savings/Savings';
//import GoogleAuth from './components/GoogleAuth/GoogleAuth';

function App() {
    return (<div>
                <Header/>
                <Main />
                <Footer/>
                <Routes>
                    <Route path="/" element={<Home />}></Route> 
                    <Route path="Debts" element={<Debts />}></Route>
                    <Route path="Transaction" element={<Transaction />}></Route>
                    <Route path="Settings" element={<MenuSettings />}></Route>
                    <Route path="Savings" element={<Savings />}></Route>
                {/*<Route path="googleauth" element={<GoogleAuth />}></Route> */}
                    
                </Routes>
            </div>
    )
}

export default App;