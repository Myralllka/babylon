import * as React from "react";
export default class MenuTransaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: props.width, height: props.height, color: this.props.color};
    }

    render() {
        return (
            <a href="#" className="item active">
                <div className="menu_item">
                    <svg
                        width={this.state.width}
                        height={this.state.height}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#D8DEE9"
                            d="M17.002 13a1 1 0 0 1 .117 1.993l-.117.007H5.417l3.292 3.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-5-5c-.603-.602-.22-1.614.593-1.701L3.002 13h14Zm-.39-8.79.095.083 5 5c.603.602.22 1.614-.593 1.701L21 11H7a1 1 0 0 1-.117-1.993L7 9h11.585l-3.292-3.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083Z"/>
                    </svg>
                    <p>Add transaction</p>
                </div>
            </a>
        )
    }
}

