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
                <div className='name'></div>
              </div>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
  </div>
  );
}

export default App;
