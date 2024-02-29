"use client"
import React from 'react';
import { useState } from 'react';
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";


const Card = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length === 0) {
        return null;
    }

    return (
        <div>
            <section className='slider'>
                {slides.map((slide, index) => (
                    <div
                        className={index === current ? 'slideactive' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <div className='detail'>
                                <p className='comments'>{slide.comments}</p>
                                <p className='by'>{slide.by}</p>
                            </div>
                        )}
                    </div>
                ))}
                <div className='arrows'>
                    <HiArrowSmallLeft className='left-arrow' onClick={prevSlide} />
                    <HiArrowSmallRight className='right-arrow' onClick={nextSlide} />
                
                </div>
            </section>
        </div>
    );
};

export default Card;
