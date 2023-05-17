import * as React from "react";

export default class MenuHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: props.width, height: props.height, color: this.props.color};
    }

    render() {
        return (
            <a href="#" className="item active">
                <div className="menu_item">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={this.state.width}
                        height={this.state.height}
                        viewBox="0 0 32 32"
                        // xml:space="preserve"
                    >
                        <path
                            fill="#D8DEE9"
                            d="M28 4v24h-8v-8h-8v8H4V4h4v4h4V4h8v4h4V4h4z"/></svg>
                    <p>Home</p>
                </div>
            </a>
        )
    }
}

