import React from 'react';

const InputLabel = props => {
    return (
        <label htmlFor={props.htmlFor}>{props.children}</label>
    );
}

export default InputLabel;
