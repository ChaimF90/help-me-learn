import React from 'react';
import axios from 'axios';

class Container extends React.Component {
    async componentDidMount() {
        const token = this.props.match.params.token;
        const body = {
            tempToken: token
        };
        const response = await axios.post('/auth/users/verify', body);
        console.log(response);
    }


    render() {
        return (
            <div />
        )
    }
}

export default Container;