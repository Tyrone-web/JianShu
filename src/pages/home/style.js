import style from 'styled-components';

export const HomeWrapper = style.div`
    over-flow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = style.div`
    float: left;
    width: 625px;
    margin-top: 30px;
    margin-left: 15px;
`

export const TopicWrapper = style.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = style.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    margin-left: 18px;
    margin-bottom: 10px;
    background: #f7f7f7;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
`

export const HomeRight = style.div`
    float: right;
    width: 280px;
`

export const ListItem = style.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        float: right;
        display: block;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`

export const ListInfo = style.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const RecommendWrapper = style.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = style.div`
    width: 280px;
    height: 50px;
    margin-bottom: 5px;
    background: url(${(props) => props.img_url});
    background-size: contain;
`

export const WriterWrapper = style.div`
    width: 280px;
    height: 300px;
    line-height: 300px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #dcdcdc;
`

export const LoadMore = style.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`

export const BackTop = style.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`