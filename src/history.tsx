import Login from './pages/Login/Login';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const history = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
]);

export default history;
