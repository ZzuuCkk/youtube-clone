import './style.css';
import logo from './images/IGN.png'
import like from './images/like.svg'
import unlike from './images/unlike.svg'
import share from './images/share.svg'
import Player from './player/Player';


function App() {
  return (
    <div className='container'>

        <div className="player-div">
          <Player/>
        </div>
        <div className='below'>
          <div className='title'>
            <h1>
              name
            </h1>
          </div>
          <div className='panel'>
            <div className='firstCol'>
              <div className='whosChanelIs'>
                <img src={logo} alt='logo'/>
                <div className='name'>
                  <p>IGN</p>
                  <span>17m subscribers</span>
                </div>
              </div>
              <div className='subscribe'>
                <button>Subscribe</button>
                <img></img>
              </div>
            </div>
            <div className='secondCol'>
              <div className='likeUnlike'>
                  <div className='like'>
                    <button className='likebutton'><img src={like} alt='logo' className='likebutton-img'/> <span>590</span></button>
                  </div>
                  <div className='line'></div>
                  <div className='unlike'>
                    <button className='unlikebutton'><img src={unlike} alt='logo' className='likebutton-img'/><span>1</span> </button>
                  </div>
                  <button className='share'><img src={share} alt='logo' className='likebutton-img'/><span>1</span> </button>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
          <div className='comments'></div>
        </div>
  </div>
  );
}

export default App;
