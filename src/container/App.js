/*import React, { Component } from 'react';
import Cardlist from './Cardlist';
import {Robort} from './Robort';
import Searchbox from './Searchbox';
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state ={
			Robort: Robort,
			Searchbox : ""
		};
	}
	onsearchchange=(event)=>{
		this.setState({Searchbox: event.target.value})
		
	}
	render() {
		const filterRobort = this.state.Robort.filter(Robort =>{
			return Robort.name.toLowerCase().includes(this.state.Searchbox.toLowerCase())
		})
		return (
		<div className="tc">
			<h4>faruk folder</h4>
			<h1 className='f1'>Robort friends</h1>
			<Searchbox onsearchchange={ this.onsearchchange } />
			<Cardlist Robort={filterRobort}/>
		</div>
	);
}
}
export default App;*/
import React, {Component} from 'react';
import Cardlist from '../component/Cardlist';
import 'tachyons';
import Searchbox from '../component/Searchbox';
//import {robort} from '../component/Robort';
import './App.css'
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry'

class App extends Component {
	constructor(){
		super()
		this.state={
			robort: [],
			Searchfeld: ""
		}
	}

	/*componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response =>response.json())
		  .then(users =>this.setState({robort:users}));
	}*/
	
		/*fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robort:users}));*/

		
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robort: users}))
	}
	

	onsearchchange=(event)=>{
		this.setState({Searchfeld:event.target.value})
	}
	render() {
		const {robort, Searchfeld} = this.state;
		 const filterRobort  = robort.filter(robo=>{
		return robo.name.toLowerCase().includes(Searchfeld.toLowerCase())
		})

		 return !robort.length? 
		 	 <h1 className="bg-white tc">LOADING</h1> :
			(
			<div className="tc">
			<h1 className='f1'>RORORT FRIENDS</h1>
			<Searchbox searchchange={this.onsearchchange} />
			<Scroll>
				<ErrorBoundry>
					<Cardlist robort={filterRobort}/>
				</ErrorBoundry>
			</Scroll>
			</div>
			);

		 }}
export default App;