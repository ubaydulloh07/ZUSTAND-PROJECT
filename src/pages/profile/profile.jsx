import useStore from "../../store/useStore";
import useAuth from "../../store/useAuth";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return <p>Iltimos, login qiling...</p>;

  return (
    <div className="profile-container">

    <div className="profile">
      <h2>Profil</h2>
      <img src={user.image} alt="User Avatar" width="100" />
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Ism: {user.firstName}</p>
      <p>Familya: {user.lastName}</p>
    <p>Jinsi: {user.gender}</p>
  
    
      <button onClick={() => { logout(); navigate("/"); }}>Chiqish</button>
    </div>
    </div>
  );
};

export default Profile;
