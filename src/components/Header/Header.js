import { useNavigate } from "react-router-dom"


export default function Header(){

let navigate = useNavigate() // allows us to navigate the page

function aboutClick(){
    navigate('/about')
}

function profileClick(){
    navigate('/profile')
}

function titleClick(){
    navigate('/')
}


    return(
        <div className='headerContainer'>
        {/* wheat color for header */}
        <div className= 'about' onClick={aboutClick} >About</div>
        <div className='title' onClick={titleClick} >Explorer</div>
        <div className= 'profile' onClick={profileClick} >Profile</div>
    </div>
    )
}