import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
class Topic extends PureComponent {

    render() {
        const { topicDataLists } = this.props;
        return (
            <div>
                <TopicWrapper>
                    {                        
                        topicDataLists.map((item) => <TopicItem key={item.id}>{item.title}</TopicItem>)
                    }
                </TopicWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    topicDataLists: state.getIn(['home', 'topicDataLists']).toJS()
})

export default connect(mapStateToProps)(Topic);