import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
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