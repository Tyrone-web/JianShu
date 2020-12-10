import style from 'styled-components';
import logoPic from '../../static/log.png';

export const HeaderWrapper = style.div`
    height: 56px;
    border-bottom: 1px solid #333
`

export const Logo = style.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;    
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = style.div`
    width: 960px;
    padding-right: 30px;
    box-sizing: border-box;
    margin: 0 auto;
    height: 100%;
`

export const NavItem = style.div`
   line-height: 56px;
   padding: 0 15px;
   font-size: 17px;
   color: #333;
   &.left {
       float: left;
   }
   &.right {
       float: right;
       color: #969696;
       .iconAa {
           font-size: 30px;
       }
   }
   &.logout {
       cursor: pointer;
   }
   &.active {
       color: #ea6f5a;
   }
`

export const SearchWrapper = style.div`
    position: relative;
    float: left;

    .iconfangdajing {
        position: absolute;        
        right:5px;
        bottom:5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        background: #eee;
        &.focused {
            background: #777;
            color: #fff;
        }
    }    
`

export const NavSearch = style.input.attrs({
    placeholder: '搜索'
})`
   width: 160px;
   height: 38px;
   padding: 0 20px;   
   margin-top: 9px;
   margin-left: 20px;
   box-sizing: border-box;
   border: none;
   outline: none;
   border-radius: 19px;
   background-color: #eee;
   font-size: 14px;
   color: #666;
   &::placeholder {
       color: #999;
   }
   &.focused {
       width: 180px;
   }
   &.slide-enter {
       transition: all .2s ease-out;
   }
   &.slide-enter-active {
       width: 180px;
   }
   &.slide-exit {
       transition: all .2s ease-out;
       width: 180px;
   }
   &.slide-exit-active {
       width: 160px;
   }
`

export const SearchInfo = style.div`
   position: absolute;
   display: none;
   left: 0;
   top: 56px;
   width: 200px;
   padding: 0 20px;
   box-shadow: 0 0 8px rgba(0, 0, 0, .2);
   background: #fff;
   &.getInfoList {
       display: block;
   }
`

export const SearchInfoTitle = style.div`
   margin-top: 20px;
   margin-bottom: 15px;
   line-height: 20px;
   font-size: 14px;
   color: #969696;
`

export const SearchInfoSwitch = style.span`
   float: right;
   font-size: 13px;
   cursor: pointer;
   .iconshuaxin {
       display: inline-block;
       margin-right: 5px;
       font-size: 14px;
       transition: all .3s ease-in;
       tranform-origin: center center
   }
`

export const SearchinfoList = style.div`
   overflow: hidden;
`

export const SearchInfoItem = style.a`
   dispaly: block;
   float: left;
   line-height: 20px;
   padding: 0 5px;
   margin-right: 10px;
   margin-bottom: 15px;
   font-size: 12px;
   border: 1px solid #ddd;
   color: #787878;
   border-radius: 3px;
`

export const Addition = style.div`
   position: absolute;
   right: 0;
   top: 0;
   height: 56px;
`

export const Button = style.div`
   float: right;
   margin-top: 9px;
   margin-right: 20px;
   padding: 0 20px;
   line-height: 38px;
   border-radius: 19px;
   border: 1px solid #ec6149;
   font-size: 17px;
   &.reg {
       color: #ec6149;
   }
   &.writting {
       color: #fff;
       background: #ec6149;
       .iconqianbi {
           font-size: 19px;
       }
   }
`