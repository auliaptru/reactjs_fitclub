import './join.scss';

const Join = () => {
    return (
        <div className='join'>
            <div className='join__left'>
                <hr />
                <div className='join__title'>
                    <span className='text__stroke'>ready to</span>
                    <span>level up</span>
                </div>
                <div className='join__title'>
                    <span>your body</span>
                    <span className='text__stroke'>with us?</span>
                </div>
            </div>
            <div className='join__right'>
                <form className='join__form'>
                    <input
                        type='email'
                        placeholder='Enter your Email Address here'
                    />
                    <button type='submit'>Join now</button>
                </form>
            </div>
        </div>
    );
};

export default Join;
