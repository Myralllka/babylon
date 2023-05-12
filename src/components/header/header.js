import React from 'react'

import './header.css'

export default class Header extends React.Component {
    render() {
        return (
            <header className="app_header">
                <div className="right">
                    <a href="#" className="account_button">
                        account
                    </a>
                </div>
            </header>
        )
    }
}
