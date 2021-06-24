import logo from './logo.svg';
import './App.css';
import track1 from "./album/SIR BAUDELAIRE.flac"; 
import track2 from "./album/CORSO.flac";
import track3 from "./album/LEMONHEAD.flac";
import track4 from "./album/WUSYANAME.flac";
import track5 from "./album/LUMBERJACK.flac";
import track6 from "./album/HOT WIND BLOWS.flac";
import track7 from "./album/MASSA.flac";
import track8 from "./album/RUNITUP.flac";
import track9 from "./album/MANIFESTO.flac";
import track10 from "./album/SWEET.flac";
import track11 from "./album/MOMMA TALK.flac";
import track12 from "./album/RISE.flac";
import track13 from "./album/BLESSED.flac";
import track14 from "./album/JUGGERNAUT.flac";
import track15 from "./album/WILSHIRE.flac";
import track16 from "./album/SAFARI.flac";


function App() {
  function playAudio () {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
  function pauseAudio () {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.pause()
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          CALL ME IF YOU GET LOST
        </p>
        <button onClick={playAudio}>
          <span>TRACK 1</span>
        </button>
        <audio className="audio-element">
          <source src={track1}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 2</span>
        </button>
        <audio className="audio-element">
          <source src={track2}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 3</span>
        </button>
        <audio className="audio-element">
          <source src={track3}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 4</span>
        </button>
        <audio className="audio-element">
          <source src={track4}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 5</span>
        </button>
        <audio className="audio-element">
          <source src={track5}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 6</span>
        </button>
        <audio className="audio-element">
          <source src={track6}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 7</span>
        </button>
        <audio className="audio-element">
          <source src={track7}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 8</span>
        </button>
        <audio className="audio-element">
          <source src={track8}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 9</span>
        </button>
        <audio className="audio-element">
          <source src={track9}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 10</span>
        </button>
        <audio className="audio-element">
          <source src={track10}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 11</span>
        </button>
        <audio className="audio-element">
          <source src={track11}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 12</span>
        </button>
        <audio className="audio-element">
          <source src={track12}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 13</span>
        </button>
        <audio className="audio-element">
          <source src={track13}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 14</span>
        </button>
        <audio className="audio-element">
          <source src={track14}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 15</span>
        </button>
        <audio className="audio-element">
          <source src={track15}></source>
        </audio>
        <button onClick={playAudio}>
          <span>TRACK 16</span>
        </button>
        <audio className="audio-element">
          <source src={track16}></source>
        </audio>
         
         
         
      
      </header>
    </div>
  );
}

export default App;
