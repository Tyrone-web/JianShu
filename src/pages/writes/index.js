import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {

    render() {
        const { login } = this.props;
        if (login) {
            return (
                <div>写文章页面</div>
            )
        } else {
            return <Redirect to='/login'></Redirect>
        }

    }
};

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login'])
});

export default connect(mapStateToProps, null)(Write);