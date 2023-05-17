import * as React from "react";

export default class MenuSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: props.width, height: props.height, color: this.props.color};
    }

    render() {
        return (
            <a href="#" className="item active">
                <div className="menu_item">
                    <svg
                        fill="#D8DEE9"
                        width={this.state.width}
                        height={this.state.height}
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="clr-i-outline clr-i-outline-path-1"
                            d="M18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
                        />
                        <path
                            className="clr-i-outline clr-i-outline-path-2"
                            d="m32.8 14.7-2.8-.9-.6-1.5 1.4-2.6c.3-.6.2-1.4-.3-1.9l-2.4-2.4c-.5-.5-1.3-.6-1.9-.3l-2.6 1.4-1.5-.6-.9-2.8C21 2.5 20.4 2 19.7 2h-3.4c-.7 0-1.3.5-1.4 1.2L14 6c-.6.1-1.1.3-1.6.6L9.8 5.2c-.6-.3-1.4-.2-1.9.3L5.5 7.9c-.5.5-.6 1.3-.3 1.9l1.3 2.5c-.2.5-.4 1.1-.6 1.6l-2.8.9c-.6.2-1.1.8-1.1 1.5v3.4c0 .7.5 1.3 1.2 1.5l2.8.9.6 1.5-1.4 2.6c-.3.6-.2 1.4.3 1.9l2.4 2.4c.5.5 1.3.6 1.9.3l2.6-1.4 1.5.6.9 2.9c.2.6.8 1.1 1.5 1.1h3.4c.7 0 1.3-.5 1.5-1.1l.9-2.9 1.5-.6 2.6 1.4c.6.3 1.4.2 1.9-.3l2.4-2.4c.5-.5.6-1.3.3-1.9l-1.4-2.6.6-1.5 2.9-.9c.6-.2 1.1-.8 1.1-1.5v-3.4c0-.7-.5-1.4-1.2-1.6zm-.8 4.7-3.6 1.1-.1.5-.9 2.1-.3.5 1.8 3.3-2 2-3.3-1.8-.5.3c-.7.4-1.4.7-2.1.9l-.5.1-1.1 3.6h-2.8l-1.1-3.6-.5-.1-2.1-.9-.5-.3-3.3 1.8-2-2 1.8-3.3-.3-.5c-.4-.7-.7-1.4-.9-2.1l-.1-.5L4 19.4v-2.8l3.4-1 .2-.5c.2-.8.5-1.5.9-2.2l.3-.5-1.7-3.3 2-2 3.2 1.8.5-.3c.7-.4 1.4-.7 2.2-.9l.5-.2L16.6 4h2.8l1.1 3.5.5.2c.7.2 1.4.5 2.1.9l.5.3 3.3-1.8 2 2-1.8 3.3.3.5c.4.7.7 1.4.9 2.1l.1.5 3.6 1.1v2.8z"
                        />
                        <path fill="none" d="M0 0h36v36H0z"/>
                    </svg>
                    <p>Settings</p>
                </div>
            </a>
        )
    }
}
