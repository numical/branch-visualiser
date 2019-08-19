import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Repos from './Repos';

function App() {
    return (
      <div>
        <Repos />
      </div>
    );
}

render(<App />, document.getElementById('app'));
