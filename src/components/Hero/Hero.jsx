import './hero.scss';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='bg-blur'></div>
            <div className='hero__left'>
                <div className='hero__header'>
                    <div className='header__logo'>
                        <img
                            src='data:image/png;base64,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'
                            alt='logo'
                        />
                    </div>
                    <ul className='header__menu'>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Programs</a>
                        </li>
                        <li>
                            <a>Why Us</a>
                        </li>
                        <li>
                            <a>Plans</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                    </ul>
                </div>
                <div className='hero__switch-animation'>
                    <div className='switch'></div>
                    <span className='switch__text'>
                        the best fitness club in the town
                    </span>
                </div>
                <div className='hero__text'>
                    <div>
                        <h1 className='text__stroke'>shape</h1>
                        <h1>your</h1>
                    </div>
                    <h1>ideal body</h1>
                    <p>
                        In here we will help you to shape and build your ideal
                        body and live up your life to fullest
                    </p>
                </div>
                <div className='hero__figures'>
                    <div className='hero__figures-wrapper'>
                        <span className='hero__figures-num'>+ 140</span>
                        <span>expert coaches</span>
                    </div>
                    <div className='hero__figures-wrapper'>
                        <span className='hero__figures-num'>+ 978</span>
                        <span>members joined</span>
                    </div>
                    <div className='hero__figures-wrapper'>
                        <span className='hero__figures-num'>+ 50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className='hero__figures-button'>
                    <button>Get Started</button>
                    <button>Learn More</button>
                </div>
            </div>
            <div className='hero__right'>
                <button className='hero__btn-join'>Join Now</button>
                <div className='hero__heart-rate'>
                    <img
                        src='data:image/png;base64,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'
                        alt='heart'
                    />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>
                <img
                    src='https://fitclub-1my.pages.dev/static/media/hero_image.e19ac0c6b1009c7280f5.png'
                    alt=''
                    className='hero__img-person'
                />
                <img
                    src='https://fitclub-1my.pages.dev/static/media/hero_image_back.9f54bfba33048f4ca688.png'
                    alt=''
                    className='hero__person-bg'
                />
                <div className='hero__calories'>
                    <img
                        src='data:image/png;base64,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'
                        alt=''
                    />
                    <div className='hero__calories-wrapper'>
                        <span>Calories burned</span>
                        <span>220</span>
                        <span>kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
