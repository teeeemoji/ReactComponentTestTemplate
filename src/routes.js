import TestPage from './pages/TestPage';
import FirstCase from './pages/FirstCase';
// import SecondCase from './pages/SecondCase';
// import ThirdCase from './pages/ThirdCase';

export default [
    {
        path: '/',
        name: 'Test Page',
        component: TestPage
    },
    {
        path: '/first-case',
        name: 'first case',
        component: FirstCase
    },
    // {
    //     path: '/second-case',
    //     name: 'second case',
    //     component: SecondCase
    // },
    // {
    //     path: '/third-case',
    //     name: 'third case',
    //     component: ThirdCase
    // }
];