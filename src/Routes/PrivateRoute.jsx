import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <p className='text-5xl'>Loading...</p>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={location?.pathname} replace />
};

export default PrivateRoute;