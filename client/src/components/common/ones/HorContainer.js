import React from 'react';

const HorContainer = props => {

    const style = {
        height: 100,
        width: '100%',
        backgroundColor: props.backgroundColor
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default HorContainer;