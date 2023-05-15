import React from 'react';
import { RouterProvider } from 'react-router';
import history from './history';
import { AuthContextProvider } from './context/AuthContext';
const App = () => (
    <AuthContextProvider>
        <RouterProvider router={history} />
    </AuthContextProvider>
);

export default App;
