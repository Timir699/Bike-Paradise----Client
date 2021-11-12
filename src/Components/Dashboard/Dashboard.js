import React from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboard = () => {
    return (
        <div>
            <UserDashboard />
            <AdminDashboard />
        </div>
    );
};

export default Dashboard;