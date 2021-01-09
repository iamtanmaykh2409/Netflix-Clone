import React, { useEffect, useState } from 'react'
import "./Header.css";

function Header() {
    const [show, setShow] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setShow(true)
            }else{
                setShow(false)
            }
        })
        return () =>{
            window.removeEventListener("scroll")
        }
    },[])
    return (
        <div className={`header ${show && "header_black" }`}>
            <img className="header_logo" src="images/nlogo.png" alt="netflix"/>
            <img className="header_user" src="images/user.jpg" alt="user" />
        </div>
    )
}

export default Header
