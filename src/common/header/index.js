import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getLogoutAction } from '../../pages/login/store/actionCreators';
import {
    gethandleInputFocusAction,
    getListAction,
    getMouseEnterAction,
    getMouseLeaveAction,
    getHandleChangePageAction,
} from './store/actionCreator';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchinfoList,
    SearchInfoItem,
    Addition,
    Button,
    SearchWrapper
} from './style';

class Header extends PureComponent {

    render() {
        const {
            focused,
            dataList,
            page,
            totalPage,
            mouseIn,
            changeNavSearchWidth,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage,
            login,
            handleLogout
        } = this.props;
        const list = [];
        if (dataList.length) {
            for (let i = page * 5; i < ((page + 1) * 5); i++) {
                list.push(<SearchInfoItem key={dataList[i]}>{dataList[i]}</SearchInfoItem>);
            }
        }

        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? <NavItem onClick={handleLogout} className="right logout">退出</NavItem> : <Link to='/login'><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className='iconfont iconAa'></i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => changeNavSearchWidth(dataList)}
                                onBlur={() => changeNavSearchWidth(dataList)}
                            />
                        </CSSTransition>
                        <i className={focused ? 'iconfont iconfangdajing focused' : 'iconfont iconfangdajing'}></i>
                        <SearchInfo
                            className={focused || mouseIn ? 'getInfoList' : ''}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                                    <i ref={(icon) => { this.spinIcon = icon }} className='iconfont iconshuaxin'></i>
                                    换一批
                                </SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchinfoList>
                                {list}
                            </SearchinfoList>
                        </SearchInfo>
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className="writting">
                            <i className="iconfont iconqianbi"></i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused']),
    dataList: state.getIn(['header', 'dataList']).toJS(),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
    changeNavSearchWidth: (list) => {
        const action = gethandleInputFocusAction();
        dispatch(action);
        list.length === 0 && dispatch(getListAction());
    },
    handleMouseEnter() {
        const action = getMouseEnterAction();
        dispatch(action);
    },
    handleMouseLeave() {
        const action = getMouseLeaveAction();
        dispatch(action);
    },
    handleChangePage(page, totalPage, spin) {
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        originAngle = originAngle ? parseInt(originAngle, 10) : 0;
        spin.style.transform = `rotate(${originAngle + 360}deg)`;

        let action;
        if (page < totalPage) {
            action = getHandleChangePageAction(page + 1);
        }
        if (page === totalPage - 1) {
            action = getHandleChangePageAction(0);
        }
        dispatch(action);
    },
    handleLogout() {
        const action = getLogoutAction(false);
        dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);