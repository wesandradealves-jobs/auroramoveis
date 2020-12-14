import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Container } from './styles';

const Archive: React.FC = ({ match }) => {
	useEffect(() => {
	}, []);	
		
	return (
		<>
			<Container>
				{match.params.slug}	
			</Container>
		</>  
	);
};

export default withRouter(Archive);