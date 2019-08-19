import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import SVG from './SVG';

function App() {
    return (
      <div>
        <SVG />
      </div>
    );
}

render(<App />, document.getElementById('app'));
