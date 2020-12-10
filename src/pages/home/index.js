import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getDataInfoAsyncAction, getToggleTopShowAction } from './store/actionCreater';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import List from './components/List';
import { BackTop } from './style';


class Home extends PureComponent {

    state = {
        a: 'test'
    }

    componentDidMount() {
        this.props.getHomeDatas();
        this.bindEvents();
    }

    componentWillUnmount() {
        const { changeScrollTopShow } = this.props;
        window.removeEventListener('scroll', changeScrollTopShow, false);
    }

    handleScrollTop() { // 这里没有用到this所以可以不使用箭头函数定义
        window.scrollTo(0, 0);
    }

    bindEvents() {
        const { changeScrollTopShow } = this.props;
        window.addEventListener('scroll', changeScrollTopShow, false);
    }

    render() {
        const { showBackTop } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    showBackTop ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                }

            </HomeWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getHomeDatas() {
        const action = getDataInfoAsyncAction();
        dispatch(action);
    },
    changeScrollTopShow() {
        const scroll = document.documentElement.scrollTop;
        if (scroll > 200) {
            const action = getToggleTopShowAction(true);
            dispatch(action);
        } else {
            const action = getToggleTopShowAction(false);
            dispatch(action);
        }
    },
});

const mapStateToProps = (state) => ({
    showBackTop: state.getIn(['home', 'showBackTop'])
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);