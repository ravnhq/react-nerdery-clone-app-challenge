import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AuthorizationContextProvider } from './context/AuthorizationContext';
import Playlist from './pages/Playlists/Playlists';

const history = createBrowserRouter([
    {
        path: '/login',
        element: (
            <AuthorizationContextProvider>
                <Login />
            </AuthorizationContextProvider>
        ),
    },
    {
        path: '/signup',
        element: (
            <AuthorizationContextProvider>
                <SignUp />
            </AuthorizationContextProvider>
        ),
    },
    {
        path: '/',
        element: (
            <AuthorizationContextProvider>
                <Home />
            </AuthorizationContextProvider>
        ),
    },
    {
        path: '/playlist/:playlistId',
        element: (
            <AuthorizationContextProvider>
                <Playlist />
            </AuthorizationContextProvider>
        ),
    },
]);

export default history;
