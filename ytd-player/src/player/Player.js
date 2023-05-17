import '../player/player.css';
import React from 'react';
import ReactPlayer from 'react-player';


class Player extends React.Component {
    render() {
      return (

        <div className='player-wrapper'>
          <ReactPlayer
            url='https://youtu.be/obUnEqsTmLg'
            className='react-player'
            playing
            controls
          />
        </div>
 
);
    }
  }

  export default Player;