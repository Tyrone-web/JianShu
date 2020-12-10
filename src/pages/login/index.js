import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoginActionAsync } from './store/actionCreators';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent {

    render() {
        const { handleLogin, login } = this.props;
        if (!login) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => { this.account = input }} />
                        <Input placeholder="密码" type='password' ref={(input) => { this.password = input }} />
                        <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/'></Redirect>
        }

    }
}

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login'])
})

const mapDispatchToprops = (dispatch) => ({
    handleLogin(accountElem, passwordElem) {
        const action = getLoginActionAsync(accountElem.value, passwordElem.value);
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToprops)(Login);