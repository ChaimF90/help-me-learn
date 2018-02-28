import React from 'react';
import PageContainer from '../../common/ones/PageContainer';
import moment from 'moment';
import DatePicker from './DatePicker';

class Container extends React.Component {

    render() {
        return (
            <PageContainer>
                <DatePicker />
            </PageContainer>
        );
    }
}

export default Container;