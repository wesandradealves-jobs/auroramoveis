import React, { useCallback, useContext, useEffect } from 'react';

import { Container } from './styles';

import Context from '../../context';

import mockapi from '../../services/mock-api';

const Home: React.FC = () => {
	const store = useContext(Context);

	return (
		<>
			<Container>
				
			</Container>
		</>  
	);
};

export default Home;