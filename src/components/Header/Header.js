import { useNavigate } from "react-router-dom"
import React, {useState } from "react"


export default function Header(){

    let [showProfileMenu, setShowProfileMenu] = useState(false)

let navigate = useNavigate() // allows us to navigate the page

function aboutClick(){
    setShowProfileMenu(false)
    navigate('/about')
}

function favoritesClick(){
    setShowProfileMenu(false)
    navigate('/favorites')
}
function profileClick(){
    setShowProfileMenu(!showProfileMenu)
}


function titleClick(){
    setShowProfileMenu(false)
    navigate('/')
}

function logOutClick(){
    window.location.reload()
}




let displayProfileMenu = showProfileMenu ? (
    <div className='profile-menu'>
        <div className='menu-option'>Demo User</div>
        <div className='menu-option'>{'demo@demo.com'}</div>
        <div className='menu-option favorite' onClick={favoritesClick}>Your Favorites</div>
        <div className='menu-option favorite' onClick={logOutClick} >Log Out</div>
    </div>
) : null



    return(
        <div className='headerContainer'>
        {/* wheat color for header */}
        <div className= 'about' onClick={aboutClick} >About</div>
        <div className='title' onClick={titleClick} > EventHunter </div>
        <div className= 'profile' onClick={profileClick} >Profile</div>
        {displayProfileMenu}
    </div>
    )
}