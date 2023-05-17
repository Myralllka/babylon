import React from "react";

import './footer.css'
import MenuDebt from "./menu/debt";
import MenuSavings from "./menu/savings";
import MenuTransaction from "./menu/transaction";
import MenuHome from "./menu/home";
import MenuSettings from "./menu/settings";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text}; // Not used right now
    }

    render() {
        return (
            <footer className="app_bottom_menu">
                <MenuHome width={40} height={40}></MenuHome>
                <MenuTransaction width={40} height={40}></MenuTransaction>
                <MenuDebt width={40} height={40}></MenuDebt>
                <MenuSavings width={40} height={40}></MenuSavings>
                <MenuSettings width={40} height={40}></MenuSettings>
            </footer>
        )
    }
};
