import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import bg1 from '../../../static/image/recommend-image/bg1.png';
import bg2 from '../../../static/image/recommend-image/bg2.png';
import bg3 from '../../../static/image/recommend-image/bg3.png';
import bg4 from '../../../static/image/recommend-image/bg4.png';

class Recomment extends PureComponent {

    render() {
        return (
            <RecommendWrapper>
                <RecommendItem img_url={bg1}></RecommendItem>
                <RecommendItem img_url={bg2}></RecommendItem>
                <RecommendItem img_url={bg3}></RecommendItem>
                <RecommendItem img_url={bg4}></RecommendItem>
            </RecommendWrapper>
        )
    }
}

export default Recomment;