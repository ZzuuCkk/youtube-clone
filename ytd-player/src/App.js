import './style.css';
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
                <img></img>
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
                  <button>s</button>
                  <span></span>
                </div>
                
                <div className='unlike'>
                  <button></button>
                  <span></span>
                </div>
                <button></button>
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
