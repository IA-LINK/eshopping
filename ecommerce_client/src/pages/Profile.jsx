import React from "react";
import { useAuth } from "../context/useAuth";

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <p>You need to log in to view this page.</p>;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
