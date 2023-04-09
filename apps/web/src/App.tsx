import './App.css';
import React, { useState } from 'react';
import { component } from '@monorepo-demo/component';
import Logo from './assets/react.svg';

function App() {
	const [count, setCount] = useState(0);
	component();

	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank">
					<Logo />
				</a>
			</div>
			<h1>hello</h1>
			<div className="card">
				<button onClick={() => void setCount((count) => count + 1)}>hello is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Rspack and React logos to learn more</p>
		</div>
	);
}

export default App;
