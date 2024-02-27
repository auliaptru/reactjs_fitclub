import './testimonials.scss';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='testimonials__left'>
                <h3>testimonials</h3>
                <h1 className='text__stroke'>what they</h1>
                <h1>say about us</h1>
                <p className='testimonials__quote'>
                    I made the right choice by choosing the Fitclub and by
                    choosing the right plan and program I already achieved my
                    ideal body!
                </p>
                <div className='testimonials__name'>
                    <span style={{ color: 'var(--orange)' }}>
                        mathew hendrickson
                    </span>{' '}
                    <span> - enterpreneur</span>
                </div>
            </div>
            <div className='testimonials__right'>
                <div className='border-bg'></div>
                <div className='bg'></div>
                <img
                    src='https://fitclub-1my.pages.dev/static/media/t-image1.c16c2c261034cf78ee57.png'
                    alt=''
                    className='testimonials__img'
                />
                <div className='testimonials__arrows'>
                    <img
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALWSURBVHgB1ZrbbepAEIbHRiDEk0uAB24SD6GD0EFOBQkVkFQQTgUhFUAqOJwKQgfkAYmrhEvwCzyAgPwTmSgXCLNhbMMnRbbCCs2/u7P77ywWBcBoNLrA42Gz2fDTsSyrs1qtqsVi0SVlLFJmMplcI9gGXp0vH3nL5bJSKpVeSBGbFPGDb9H34BknkUg8kDJqAsbj8b0f/F4wpS5JGRUBHPx6va4LmrqkzNECDILnEfhPyhyVxFhteKW5FTZv5/P5P6TMr0cAwTelwWOEnoIInjEegW6366RSqSZeryTtIfKxUChIR8kYIwF+8M94vZC0R8//xeZVpwARC+j3+2nbtv/RCQXPiAT4wXPPpyXtMW3uMG0aFAIHBZgGj55nz9OikPhRgGHwHv6qWG3aFCJ7BbCjxFTg4B06jAfHWcnlcqpGTcLOfQA9f2kQvBtV8Ezs6z/YUeLB0yBJh3Ex5ytI2AFFxKcRwLSpHXKUH3gLPohDignvOWBiyoCHtncUgLuUgE7rbN/fBBgGfwq4vkVpWEjYGyyVTTpDeMNE7HaNzhSsfjVOYpG3OVHSLMCl8+XF5mSgMwULz6PNmczWl84LjxOYTeP7PoDVqI6Evpd+A7tOimD6xWIxbzabueVymc3jZzM3GAxukdnS4tNp7cRbDPeFyEXstNOGVjpSETvtNFtjtsgkm+N86On2er1I9pO9dSEWwT1LMhFOPB5/Hg6HolKLJupnYnCDY+UThcTByhzPbYORYFrsbikkTOtC4pFA23o2mw18gzSqzE2nU2exWIgrc2GIMCruZjIZD7csPJ1EpRM+JAU9nX5dXseK08LjWtIWS3ILq1qVAuCo+wFD/9Sez+fVrYfR4qgbGi7eGjjZq2QyqV5mP/qKyUREEMdXlUs+AxESb2WE2jWrL+LHROUbe1JG9aKbT0i+iF2J6vHPDUgZVQGML6L8obe5ct1hdxuE5X4FLihqMNKrIDAAAAAASUVORK5CYII='
                        alt=''
                    />
                    <img
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAbCAYAAABr/T8RAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADxSURBVHgB5ZfhDYIwEIWfTsAGOoIj6AY4gWwAG8AIbAAb6AhsoBswAiOcd1KiiaUEci0/+JKXNJD0I7m2R4EFEFHK6UxyhIBFCf1TYSZ7zCeyPJOPeXKO8IVMzmnJTrtp+Qm+4MkjU1sbsuJv8AkLahrH73ZjQbFZeeaQV5zPObAzg5Rzhh6yoqORdy/OVcR3HsQISyNiwgrIWd0gPI+hxiXnAD2manyBNtT36jHqYVVrS3OHtIQPJqQFtKG+UVQOaQZtaLo7JdCG3P1YpPr9mNb4AzHSLqjUiMdan9Raf4/+iGOL1M/BYJEX9L1JFFjAG4XRmJQfpPVeAAAAAElFTkSuQmCC'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
