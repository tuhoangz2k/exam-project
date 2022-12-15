import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../../app/reduxSelector';
import { getRole } from '../../hooks/common';

function Admin() {
  const userId = useSelector(selectUser)?.userId;
  const isAdmin = getRole(userId) === 'admin';
  if (!userId) return <Navigate to="/login" replace={true} />;
  if (!isAdmin) return <Navigate to="/dashboard" replace={true} />;
  if (isAdmin) return <div>Admin</div>;
}

export default Admin;
