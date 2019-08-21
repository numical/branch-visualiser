import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import SVG from './SVG';
import dimensions from './dimensions';
import data from './data';

function App() {

    const { repos } = data;

    const svgProps = {
        dimensions: dimensions(),
        repos
    };

    return (
      <div>
        <SVG {...svgProps} />
      </div>
    );
}

render(<App />, document.getElementById('app'));
