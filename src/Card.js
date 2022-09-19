import './Card.css'


function Card(props) {
    const profile = props;
  return (
    <div className="profile-card">
        <img className="profile-image" src={profile.avatar_url} alt={profile.username}/>
        <div className="profile-details">
            <h4>{profile.name}</h4>
            <p className="profile-username">{profile.username}</p>
        </div>
    </div>
  );
}

export default Card