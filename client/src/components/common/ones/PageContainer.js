import React from 'react';

const PageContainer = ({ children }) => {

    const style = {
        height: '1000px',
        width: '100%',
        backgroundColor: 'grey'
    };

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default PageContainer;