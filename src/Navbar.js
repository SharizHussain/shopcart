import React, {useEffect} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartFlatbed, faHouseChimney, faIcons, faTags, faTruck, faUser } from '@fortawesome/free-solid-svg-icons'
import brand from './icons/63e86ab4c21faa7bc0bd90dd_Logo.svg'
// import { gsap } from 'gsap'


export default function Navbar() {

    function anm(data){
        document.querySelector(".icn-bg1").style.marginLeft  = `${data.margin}`-0.4+"vw"
        document.querySelector(".icn-bg2").style.marginLeft  = `${data.margin}`+"vw"
        document.querySelector("#nav1").style.color = "#345ba3"
        document.querySelector("#nav2").style.color = "#345ba3"
        document.querySelector("#nav3").style.color = "#345ba3"
        document.querySelector("#nav4").style.color = "#345ba3"
        setTimeout(() => {
            document.querySelector(`#${data.id}`).style.color = "#0b2447"
        }, 500);
        // console.log(x)
        // gsap.to(".icn-bg1" , {
        //     x: 4.5+"vw",
        //     ease: "power1.out"
        // })
        // gsap.to(".icn-bg2" , {
        //     x: 4.5+"vw",
        //     ease: "power1.out"
        // })
    }

    const use = useNavigate(); 

    useEffect(() => {
        use('/')
    },[1])

    return (
        <>
            <nav> 
                <img src={brand} alt='Shopcart' className='brand' />
                <div className='navs'>
                    <i className='icn-bg1'></i>
                    <i className='icn-bg2'><i>.</i></i>
                    <Link to={'/'}> <FontAwesomeIcon icon={faHouseChimney} className='nav' id='nav1' onClick={()=>{anm({margin:-0.4 , id: "nav1"})}}/> </Link>
                    <Link to={'/cats'}> <FontAwesomeIcon icon={faIcons} className='nav' id='nav2' onClick={()=>{anm({margin: 4 , id : "nav2"})}} /> </Link>
                    <Link to={'/discount'}> <FontAwesomeIcon icon={faTags} className='nav' id='nav3' onClick={()=>{anm({margin: 8.2 , id: "nav3"})}}/> </Link>
                    <Link to={'/delivery'}> <FontAwesomeIcon icon={faTruck} className='nav' id='nav4' onClick={()=>{anm({margin: 12.3 , id: "nav4"})}}/> </Link>
                    <div className='search'>
                        <input type="search" placeholder='Search Product' />
                    </div>
                </div>
                <div className="navs-right">
                    <FontAwesomeIcon icon={faUser} className='nav' />
                    <FontAwesomeIcon icon={faCartFlatbed} className='nav' />
                </div>
            </nav>
            <Outlet/>
        </>
    )
}
