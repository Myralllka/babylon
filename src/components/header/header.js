import React from 'react'

import './header.css'
import MenuAccount from "./account";

export default class Header extends React.Component {
    render() {
        return (
            <header className="app_header">
                <div className="right">
                    <MenuAccount height={40} width={40}></MenuAccount>
                </div>
            </header>
        )
    }
}
