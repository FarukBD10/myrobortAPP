import React from 'react';
import Card from './Card';


const Cardlist = ({robort})=> {
	return (
		<div>{
				robort.map((user, i)=>{
				return(<Card 
				key={i}
				id={robort[i].id} 
				name={robort[i].name} 
				email={robort[i].email}
				/>)
			})}
		</div>
		);
} 
export default Cardlist;