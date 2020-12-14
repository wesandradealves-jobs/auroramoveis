import React, { useContext, useEffect, useState, InputHTMLAttributes } from 'react';
import { useHistory, Link } from "react-router-dom";
import Context from '../../context/';
import { 
	Logout,
	Contact,
	ContactTitle,
	ContactTerm,
	Img,
	Logo,
	Container,
	Menu,
} from './styles';
import Navigation from '../../components/Navigation';
import {
	Wrapper
} from '../../layouts/styles';

import SearchBar from '../../components/SearchBar';
import Cart from '../../components/Cart';

interface IHeader extends InputHTMLAttributes<HTMLInputElement> {
}

export const Header: React.FC<IHeader> = ({ placeholder }) => {
	const store = useContext(Context);
	let [categories, setCategories] = useState<any>([]);
	const history = useHistory();

	const handleLogout = () => {
		localStorage.clear();
		store.setToken();

		history.replace({
			pathname: '/',
		})			
	}		

	useEffect(() => {
		setCategories(store.categories.filter((o:any) => o.acf.ativa).map((o:any) => {
			return {
				id: o.id,
				label: o.name,
				isActive: o.acf.ativa,
				isFeatured: o.acf.destaque,
				path: `/produtos/${o.slug}`,
				parent: o.parent
			}
		}));
	}, [store]);	

	return (
		<Container>
			<Wrapper className="wrapper">
				{store.token || localStorage.getItem('token') ? <Logout onClick={e => handleLogout()}>Olá, {store.user.displayname || JSON.parse(localStorage.getItem('user')).displayname} (<span>Sair</span>)</Logout> : null}				
				<Logo>
					<Link to={
						{
							pathname: '/',
							state: {
								title: 'Aurora Móveis'
							}
						}
					}><Img height={80} src='/static/logo.jpg' /></Link>
				</Logo>
				<SearchBar placeholder="Buscar..." />
				<Contact>
					<ContactTitle>Contatos via Whatsapp</ContactTitle>
					<ContactTerm>21 9999-9999</ContactTerm>
				</Contact>
				<Cart currency="R$" />
			</Wrapper>
			<Menu>
				<Wrapper className="navigation--wrapper">
					<Navigation horizontal={true} links={categories} />
				</Wrapper>
			</Menu>
		</Container>
	);
};
