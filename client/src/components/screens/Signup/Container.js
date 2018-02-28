import React from 'react';
import FormInput from '../../common/twos/FormInput';
import PageContainer from '../../common/ones/PageContainer';
import axios from 'axios';

class Container extends React.Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        error: {}
    }

    changeHandler = e => {
        const user = { ...this.state.user };
        user[e.target.name] = e.target.value;
        this.setState({ user });
    }

    submitHandler = async () => {
        const response = await axios.post('/auth/users', this.state.user);
    }

    render() {
        return (
            <PageContainer>
                <form>
                    <FormInput
                        id="firstName"
                        labelText="First Name"
                        name="firstName"
                        value={this.state.user.firstName}
                        onChange={this.changeHandler}
                        type="text"
                    />
                    <FormInput
                        id="lastName"
                        labelText="last Name"
                        name="lastName"
                        value={this.state.user.lastName}
                        onChange={this.changeHandler}
                        type="text"
                    />
                    <FormInput
                        id="email"
                        labelText="email"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.changeHandler}
                        type="text"
                    />
                    <FormInput
                        id="password"
                        labelText="password"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.changeHandler}
                        type="password"
                    />
                    <button type="button" onClick={this.submitHandler}>Create Account</button>
                </form>
            </PageContainer>
        );
    }
}

export default Container;
