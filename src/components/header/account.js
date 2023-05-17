import * as React from "react";

export default class MenuAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: props.width, height: props.height};
    }

    render() {
        return (
            <a href="#" className="item active">
                <div className="menu_item">
                    <svg
                        width={this.state.width}
                        height={this.state.height}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx={12}
                            cy={7}
                            r={4}
                            stroke="#D8DEE9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4 21v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
                            stroke="#D8DEE9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </a>
        )
    }
}
