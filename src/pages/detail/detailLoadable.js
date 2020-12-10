import React from 'react';
import Loadable from 'react-loadable'; // 异步加载组件

const LoadableComponent = Loadable({
    loader: () => import('./index.js'),
    loading() {
        return <div>正在加载中。。。</div>
    }
});

const loadComponent = () => <LoadableComponent />

export default loadComponent;
