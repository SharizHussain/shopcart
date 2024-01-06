import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { Data } from './Data'
import Hero_gsap from './Hero_gsap'
import img_btn from './images/left-arrow.png'
import img_btn2 from './images/right-arrow.png'
export default function Hero() {

    let y = 0;
    let d_img = 0;

    function slide_left() {

        const tl = gsap.timeline()

        gsap.to(".obj_ch", {
            opacity: 0,
        })
        
        y -= 215
        if (y < 0) {
            y = 0
        }
        tl.to("#hero-card", {
            // x: -y,
            translateX: -y,
            duration: 0.5
        })

        d_img -= 100
        if (d_img < 0) {
            d_img = 0
            gsap.to(".obj_ch", {
                opacity: 1,
            })
        }
        else {


            tl.to(".d_img", {
                // x: -d_img + 'vw',
                translateX: -d_img + 'vw',
                duration: 0.5,
                onComplete: () => {
                    tl.to(".obj_ch", {
                        duration: 1,
                        opacity: 1
                    })
                }
            })
        }
    }

    function slide_right() {
        gsap.to(".obj_ch", {
            opacity: 0,
        })

        let tl = gsap.timeline();

        y += 215;
        if (y >= 1290) {
            y = 0
        }

        tl.to("#hero-card", {
            // x: -y,
            translateX: -y,
            duration: 0.5
        })

        d_img += 100
        if (d_img > 500) {
            d_img = 0
        }

        tl.to(".d_img", {
            // x: -d_img + 'vw',
            translateX: -d_img + 'vw',
            duration: 0.5,
            ease: 'Power4.in',
            onComplete: () => {
                tl.to(".obj_ch", {
                    delay: 0.2,
                    duration: 0.8,
                    opacity: 1
                })
            }})
    }

    let i = 0 

    setTimeout(() => {
        i = 1
    }, 2000);

    if(i!=1){

        useEffect(() => {
            gsap.from(".navs", {
                delay: 0.5,
                // y: -200,
                translateY: -200,
                duration: 1
        })
        gsap.from(".navs-right", {
            delay: 1,
            y: -150,
            duration: 1
        })
        gsap.from(".brand", {
            delay: 1,
            // y: -150,
            translateY: -150,
            duration: 1,
        });
        gsap.from(".obj_ch", {
            delay: 1.5,
            // x: -600,
            translateX: -600,
            duration: 1,
            opacity: -2
        });
        // eslint-disable-next-line
    }, [])

}


    return (
        <>
            <div className='hero'>
                <div className="d_img">
                    {
                        Data.map((obj) => (
                            <div key={obj.id} className='obj'>
                                <img src={obj.img} alt="Home Page" className='img1'
                                    style={{ objectPosition: obj.objPos }}
                                />
                                <div className={"obj_ch"}>
                                    <h1>{obj.h1}</h1>
                                    <h4>{obj.h4}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='hero2'>
                    <Hero_gsap />
                </div>
                < button className='slider_btn' onClick={slide_left}><img src={img_btn} alt='button' /></button >
                < button className='slider_btn2' onClick={slide_right}><img src={img_btn2} alt='button' /></button >
            </div >
        </>
    )
}
