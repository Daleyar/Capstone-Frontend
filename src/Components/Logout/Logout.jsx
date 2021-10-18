import './Logout.css'

const Logout = () => {
    
    const handleClick = () => {
        localStorage.clear();
        window.location = '/';
        console.log("Successfully logged out")
    }
    const handleNoClick = () => {
        window.location = '/Home';
    }
    return ( 
        <div className='logout'>
            <h3>
                Are you sure you want to logout?
            </h3>
            <button type="button" class="btn btn-dark btn-sm" onClick={handleClick}>Yes</button>
            <button type="button" class="btn btn-dark btn-sm" onClick={handleNoClick}>No</button>
        </div>
    );
}

export default Logout;