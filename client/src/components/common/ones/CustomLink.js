import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = props => {
    const style = {
        float: 'right',
        marginTop: '3%',
        marginRight: '1%'
    };

    return (
        <Link style={style} to={props.to}>{props.children}</Link>
    );
}

export default CustomLink;