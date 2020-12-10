import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMoreListActionAsync } from '../store/actionCreater'
import { ListItem, ListInfo, LoadMore } from '../style';


class List extends PureComponent {

    render() {
        const { listDatas, getMoreListData, articlePage } = this.props;
        return (
            <div>
                {
                    listDatas.map((item, index) =>
                        <Link key={index} to={`/detail/id=${index}`}>
                            <ListItem>
                                <img className='pic' src={item.img_url} alt='120' />
                                <ListInfo>
                                    <h3 className="title">{item.title}</h3>
                                    <p className="desc">{item.desc}</p>
                                </ListInfo>
                            </ListItem>)
                        </Link>)
                }
                <LoadMore onClick={() => getMoreListData(articlePage)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listDatas: state.getIn(['home', 'listDatas']).toJS(),
    articlePage: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
    getMoreListData(articlePage) {
        const action = getMoreListActionAsync(articlePage);
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);