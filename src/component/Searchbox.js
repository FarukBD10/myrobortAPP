/*import React from 'react';


const searchbox = ({Searchfeld, onsearchchange}) => {
	return  (
		<div className="pa2">
			<input className="pa3 bg-lightest-blue"
			type="search" 
			placeholder="Search Robort"
			onChange = { onsearchchange }
			/>
			
		</div>);
  }
export default searchbox;*/

import React from 'react';

const searchbox = ({searchchange}) => {
	return(
		<div className="pa2">
		<input 
		className="pa3 ba2 b--green bg-lightest-blue"
		type="search" 
		placeholder="Search robort friends"
		onChange={searchchange}
		/>
		</div>
		);
}
export default searchbox;