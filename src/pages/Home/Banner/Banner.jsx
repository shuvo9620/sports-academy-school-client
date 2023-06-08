import React from 'react';
import football from '../../../assets/images/Banner/football.jpg';
import cricket from '../../../assets/images/Banner/cricket.jpg';
import badminton from '../../../assets/images/Banner/badminton.jpg';
import hocky from '../../../assets/images/Banner/hocky.jpg';
import basketball from '../../../assets/images/Banner/basketball.jpeg';

const Banner = () => {
    return (
        <div className="carousel w-full relative">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full h-[500px]">
                <img src={football} className="w-full" alt="Football" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 text-white p-24 px-96 mx-10 text-center">
                    <h2 className="text-3xl font-bold">Football</h2>
                    <p className="mt-2">Experience the thrill of the beautiful game. <br /> Join our football classes and improve your skills on the field.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full h-[500px]">
                <img src={cricket} className="w-full" alt="Cricket" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 text-white p-24 px-96 mx-10 text-center">
                    <h2 className="text-3xl font-bold">Cricket</h2>
                    <p className="mt-2">Step onto the pitch and unleash your batting and bowling skills. <br /> Join our cricket training and be a part of the action.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full h-[500px]">
                <img src={badminton} className="w-full" alt="Badminton" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 text-white p-24 px-96 mx-10 text-center">
                    <h2 className="text-3xl font-bold">Badminton</h2>
                    <p className="mt-2">Take your racket in hand and master the art of badminton. <br /> Join our training sessions and improve your skills on the court.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full h-[500px]">
                <img src={hocky} className="w-full" alt="Hockey" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 text-white p-24 px-96 mx-10 text-center">
                    <h2 className="text-3xl font-bold">Hockey</h2>
                    <p className="mt-2">Grab your stick and glide on the ice. <br /> Join our hockey training and learn the techniques to become a skilled player.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 5 */}
            <div id="slide5" className="carousel-item relative w-full h-[500px]">
                <img src={basketball} className="w-full" alt="Basketball" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 text-white p-24 px-96 mx-10 text-center">
                    <h2 className="text-3xl font-bold">Basketball</h2>
                    <p className="mt-2">Dribble, shoot, and score on the court. <br /> Join our basketball training sessions and develop your skills in the game.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
