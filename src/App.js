import React from 'react'
import {useRef} from 'react'
import Router from './Router'

export default function App() {

    const ref = useRef();

    document.addEventListener("mousemove", function (dets) {

        // console.log(dets.x)
        ref.current.style.left = dets.x - 10 + "px"
        ref.current.style.top = dets.y - 10 + "px"
    })

    return (
        <div>
            {/* <div className='loader'></div> */}
            <Router />
            <div className="cursor" ref={ref}></div>
        </div>
    )
}
