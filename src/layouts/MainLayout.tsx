import React, { useEffect, useContext, useState } from 'react';

import {
	useLocation
} from 'react-router-dom';

import { App, Main } from './styles';

import Context from '../context/';

import {
  Section,
  Wrapper
} from './styles';

import {
	PageTitle,
  } from '../styles/globalElements';

import {Header} from '../components/Header/Header';
import {Footer} from '../components/Footer/Footer';

const Layout: React.FC = ({ children }) => {
	let [pageTitle, setTitle] = useState<any>();
	const location = useLocation();

	return (
	<App>
		<Header/>
	 	<Main>
			<Section>
				<Wrapper> 
					{location.pathname !== '/' && location.pathname.indexOf('produtos') < 0 ? <PageTitle>{pageTitle}</PageTitle> : null}
					{children}
				</Wrapper>   
			</Section>
	  	</Main>
	  	<Footer/>
	</App>
	);
};

export default Layout;
