import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { getDetailDataActionAsync } from './store/actionCreators'

class Detail extends PureComponent {

    componentDidMount() {
        const paramsId = this.props.match.params.id;
        this.props.getDetailData(paramsId);
    }

    render() {
        const { detailData } = this.props;
        return (
            <DetailWrapper>
                <Header>{detailData.title}</Header>
                <Content>
                    <img alt='图片' src='http://scpic.chinaz.net/files/pic/pic9/202010/apic28749.jpg' />
                    {detailData.content.map((item, index) => <p key={index}>{item}</p>)}
                </Content>
            </DetailWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    detailData: state.getIn(['detail', 'detailData']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
    getDetailData(id) {
        const action = getDetailDataActionAsync(id); // 异步获取数据
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));