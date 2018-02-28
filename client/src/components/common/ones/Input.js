import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}
                id={this.props.id}
            />
        );
    }
}

export default Input;