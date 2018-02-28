import React from 'react';
import CustomLink from '../ones/CustomLink';
import HorContainer from '../ones/HorContainer';

class NavBar extends React.Component {
    render() {
        return (
            <HorContainer backgroundColor={'black'}>
                <CustomLink to={'/signup'} >Signup</CustomLink>
                <CustomLink to={'/login'} >Login</CustomLink>
                <CustomLink to={'/'} >Home</CustomLink>
            </HorContainer>
        );
    }
}

export default NavBar;