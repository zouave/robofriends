import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '3px solid black', height: '75vh'}}>
			{props.children}
		</div>
	)
}


export default Scroll;
