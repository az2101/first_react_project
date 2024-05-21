const Profile = (props) => {
    return(
        <div id="profile">
            <h1 id="name">{props.name}</h1>

            <p data-testid="job" id="job">{props.job}</p>
            <p data-testid="birthdate" id="birthdate">{props.birthdate}</p>
        </div>
    )
}

export default Profile;
