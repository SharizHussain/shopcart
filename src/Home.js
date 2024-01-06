import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cards, page2 } from './Data';
import Hero from './Hero';
import rotateRight from './icons/down-arrow.png';
import rotateLeft from './icons/down-arrow(1).png';
import './index.css';
import _ from 'lodash';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  let pos = 720;

  useEffect(() => {
    const animation = gsap.to('.dimag_kharab', {
      rotate: -pos,
      duration: 1.5,
      ease: "power4.out"
      // paused: true,
    });

    ScrollTrigger.create({
      trigger: '.dimag_kharab',
      animation: animation,
      start: '-250px',
      end: '150px',
      // markers: true
    });
  }, []);


  // Throttle the functions to prevent rapid calls
  const throttledRotateSlideRight = _.throttle(() => {
    pos += 45;
    gsap.to('.dimag_kharab', {
      rotate: -pos,
      ease: "power4.out",
      duration: 0.5
    });
  }, []); // Adjust the throttle time as needed

  const throttledRotateSlideLeft = _.throttle(() => {
    pos -= 45;
    gsap.to('.dimag_kharab', {
      rotate: -pos,
      ease: "power4.out",
      duration: 0.5
    });
  }, []); // Adjust the throttle time as needed

  return (
    <>
      <Hero />

      <div className="page1" data-speed="0.2">
        <div className="cards">
          <div className="dimag_kharab">
            <CardSlides />
          </div>
          <button className="rotateLeft" onClick={throttledRotateSlideLeft}>
            <img src={rotateLeft} alt="rotate left" />
          </button>
          <button className="rotateRight" onClick={throttledRotateSlideRight}>
            <img src={rotateRight} alt="rotate right" />
          </button>
        </div>
      </div>

      <div className="page2">
        <h4 className="cat_of_month">Categories of the Month</h4>
        <div className="page2_main">
          {page2.map((p) => (
            <div className="page2_a" key={p.id}>
              <img src={p.img} alt="img" />
              <div>{p.content}</div>
              <div className="show">
                <img src={p.img} alt="sdf" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const CardSlides = () =>
  cards.map((card) => (
    <div
      className="page1_C"
      key={card.id}
      style={{
        transform: 'rotate(' + card.angle + 'deg',
        marginTop: card.pos,
        marginRight: card.posR,
      }}
    >
      <img src={card.img} alt="Card" key={card.id} className="page1_imgs" />
      <button className="cards_btn">
        <span>Shop Now</span>
      </button>
    </div>
  ));
