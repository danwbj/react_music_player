import React from 'react'
import { render } from 'react-dom';
//页面自动刷新库
import { AppContainer } from 'react-hot-loader'
import Hello from './components/hello'
import Root from 'root'
// import './index.less'

render(
    <AppContainer>
        <Root></Root>
    </AppContainer>,
    
    document.getElementById('root')
)

if (module.hot) { 
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render(
            <AppContainer>
                <NewRoot />
            </AppContainer>,
            document.getElementById('root')
        );
    })
}