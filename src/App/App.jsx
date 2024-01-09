import React from 'react';

// import axios from 'axios';

import Header from '../components/Header';
import Filters from '../components/Filters';
import Content from '../components/Content';

import './App.scss';

const App = () => {
	return (
		<div className='aviasales'>
			<div className='container'>
				<div className='aviasales__inner'>
					<Header />
					<main className='main'>
						<Filters />
						<Content />
					</main>
				</div>
			</div>
		</div>
	);
};

export default App;
