import React, {useState} from 'react';


function Card ({ name, email, id }) {
	const [details, setDetails] = useState(1); //Need to figure out a way to use these hooks/state
	//console.log({details}, 'value of details');

	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' onClick={() => (setDetails(1))}>
				<img alt='robots' width='200' height='200' src={`https://robohash.org/${id}`} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
		</div>
	)
	
}

export default Card;