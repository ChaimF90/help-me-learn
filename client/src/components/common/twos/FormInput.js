import React from 'react';
import Input from '../ones/Input';
import Label from '../ones/InputLabel';

class FormInput extends React.Component {
    render() {
        return [
            <Label id={this.props.id} key={1}>{this.props.labelText}</Label>,
            <Input
                key={2}
                type={this.props.type}
                name={this.props.name}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                id={this.props.id}
            />
        ]
    }

}

export default FormInput;