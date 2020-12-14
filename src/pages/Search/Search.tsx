import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { useLocation } from "react-router-dom";
import { Container } from './styles';

const Search: React.FC = ({ match }) => {
	const location = useLocation();
	let [query, setQuery] = useState<any>();

	useEffect(() => {
		// setQuery(location.search.split('=')[1]);
	}, []);	
		
	return (
		<>
			<Container>
				{location.search.split('=')[1]}
			</Container>
		</>  
	);
};

export default withRouter(Search);