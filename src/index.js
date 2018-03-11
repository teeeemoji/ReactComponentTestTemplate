import React from 'react'
import ReactDOM from 'react-dom';
import PageContainer from './PageContainer/PageContainer'
import TestPage from './pages/TestPage';
import style from './style.css';
import AutoResizedTextarea from './components/AutoResizedTextarea'

ReactDOM.render(
    <PageContainer>
        <div className={style['component-container']}>
            <h2>尝试第一种方案</h2>
            <AutoResizedTextarea/>
        </div>
    </PageContainer>,
    document.getElementById('root')
);

/*
// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
*/
