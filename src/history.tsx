import SignUp from './pages/SignUp/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login/Login';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';

const history = createBrowserRouter([
    {
        path: '/login',
        element: (
            <AuthContextProvider>
                <Login />
            </AuthContextProvider>
        ),
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    {
        path: '/',
        element: <Home />,
    },
]);

export default history;
