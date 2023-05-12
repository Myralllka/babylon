import React from "react";

import './footer.css'

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text};
    }

    render() {
        return (
            <a href="#" className="item active">
                <div className="menu_item">
                    <strong>{this.state.text}</strong>
                </div>
            </a>
        );
    }
}

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text};
    }

    render() {
        return (
            <div className="app_bottom_menu">
                <MenuItem text="Main menu"/>
                <MenuItem text="Incomes"/>
                <MenuItem text="Savings"/>
                <MenuItem text="Debts"/>
            </div>
        )
    }
};
