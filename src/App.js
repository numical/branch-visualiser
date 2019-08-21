import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import SVG from './SVG';
import data from './data';
import useWindowDimensions from "./useWindowDimensions";

function App() {

    const { repos } = data;
    const dimensions = useWindowDimensions();
    const svgProps = {
        dimensions,
        repos
    };

    return (
      <div>
        <SVG {...svgProps} />
      </div>
    );
}

render(<App />, document.getElementById('app'));
