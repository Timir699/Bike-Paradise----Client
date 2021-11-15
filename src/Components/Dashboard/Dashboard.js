import React from 'react';
import useAuth from '../../Hooks/useAuth';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboard = () => {
    const {userData} = useAuth()
    // console.log(userData);
    return (
        <div>
             {userData.role === 'admin' ? <AdminDashboard /> : <UserDashboard />}
        </div>
    );
};

export default Dashboard;