import React from 'react';

import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';
import { UseReducer } from './components/UseReducer';

import './assets/styles/Global.css';

export const App = () =>
{
	return (
		<section className='App'>
			<UseState name="UseState"/>
			<ClassState name="ClassState"/>
			<UseReducer name="UseReducer"/>
		</section>
	);
};
