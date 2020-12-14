import React, { useCallback, useContext } from 'react';

import {  
	Img,
	Container,
	Title,
	SubTitle
} from './styles';

const NotFound: React.FC = () => {
	return (
		<Container>
			{/* <Img src="/static/404.png" /> */}
			<Title>404 <SubTitle>Oops! A página não pode<br/>ser encontrada.</SubTitle></Title>
		</Container>
	);
};

export default NotFound;
