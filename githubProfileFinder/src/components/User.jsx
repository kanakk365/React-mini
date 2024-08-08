


export default function User({user}){

    const { avatar_url , followers, following , public_repos , name, login, created_at } = user;

    const createdDate = new Date(created_at);

return( 
    <div className="user">
        <div className="pic">
        <img src={avatar_url} alt="profile_pic" />
        </div>
        <div className="name">
            <a href= {`https://github.com/${login}`} >{name || login}</a>
            <p> User Joined on { " " } { `${createdDate.getDate()} ${createdDate.toLocaleString("en-us" , { month: "short", })} ${createdDate.getFullYear()}` } </p>
        </div>
        <div className="profile-info">
        <div className="ab">
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div className="ab">
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div className="ab">
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
)
}