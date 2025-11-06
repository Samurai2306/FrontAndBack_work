import './UserCard.css'

function UserCard({ name, role, avatarUrl, isOnline }) {
  return (
    <div className="user-card">
      <div className="user-card-avatar-container">
        <img 
          src={avatarUrl} 
          alt={`Аватар ${name}`}
          className="user-card-avatar"
        />
        <span className={`user-card-status ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? '●' : '○'}
        </span>
      </div>
      <div className="user-card-info">
        <h4 className="user-card-name">{name}</h4>
        <p className="user-card-role">{role}</p>
        <span className={`user-card-status-text ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? 'Онлайн' : 'Офлайн'}
        </span>
      </div>
    </div>
  );
}

export default UserCard;

