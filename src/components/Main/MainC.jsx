import './main.css';
import { assets } from '../../assets/assets';
const MainC = () => {
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt='' />
      </div>
      <div className='main-container'>
        <div className='greet'>
          <p>
            <span>Hello,Dev</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className='cards'>
          <div className='card'>
            <p>Suggest beautiful places to see on upcoming road trip</p>
            <img src={assets.compass_icon} alt='' />
          </div>
          <div className='card'>
            <p>Tips of becoming a successful web developer</p>
            <img src={assets.bulb_icon} alt='' />
          </div>
          <div className='card'>
            <p>
              Isabellah Sharon. Who is this she? It is time you watch her space
            </p>
            <img src={assets.message_icon} alt='' />
          </div>
          <div className='card'>
            <p> Improve the readability of the following code</p>
            <img src={assets.code_icon} alt='' />
          </div>
        </div>

        <div className='main-bottom'>
          <div className='search-box'>
            <input type='text' placeholder='Enter a prompt here' id='' />
            <div>
              <img src={assets.gallery_icon} alt='' />
              <img src={assets.mic_icon} alt='' />
              <img src={assets.send_icon} alt='' />
            </div>
            <p className='bottom-info'>
              Gemini may display inaccurate info, includng about people, so
              double-check its responses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainC;
