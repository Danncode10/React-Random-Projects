import profilePic from './assets/profile.png';

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Lester Dann Lopez</h2>
            <p className="card-text">Future Software Engineer and A.I. Developer</p>
        </div>
    );
}

export default Card;
