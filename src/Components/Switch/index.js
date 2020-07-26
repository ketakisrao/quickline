import React from 'react';
import './index.scss';

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRight: false
        };
    }
    render() {
        return (
            <label class="switch">
                <input type="checkbox" checked={this.props.isChecked} onChange={this.props.handleChange} />
                <span class="slider round"></span>
            </label>
        );
    }
}

export default Switch;