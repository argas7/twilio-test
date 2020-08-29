import React from 'react';
import ReactDOM from 'react-dom'

import VideoChat from './VideoChat';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Video Chat with Hooks</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Made with{' '}
          <span role="img" aria-label="React">
            ⚛️
          </span>{' '}
          by <a href="https://twitter.com/philnash">philnash</a>
        </p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
