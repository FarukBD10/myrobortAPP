import React from 'react';


const Card=({name, email, id})=>{
	return(
		<div className="dib bg-lightest-blue pa3 ma3 br2 grow bw2 shadow-5">
		<img className="w4 h4" alt="robort" src={`https://robohash.org/${id}?50%50`}/>
		<div>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		</div>);
}
export default Card;