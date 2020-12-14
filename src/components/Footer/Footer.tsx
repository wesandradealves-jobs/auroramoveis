import React, { useContext, useEffect, InputHTMLAttributes } from 'react';
import { Link } from "react-router-dom";

import { 
	Copyright,
	FooterInner,
	Column,
	ColumnTitle,
	Container,
	Description
} from './styles';

import { 
	Img,
	Logo,
} from '../Header/styles';

import {
	Wrapper
} from '../../layouts/styles';

import {
	PaymentMethods,
	PaymentMethod
} from '../../styles/globalElements';

import Navigation from '../../components/Navigation';

interface IFooter extends InputHTMLAttributes<HTMLInputElement> {
}

export const Footer: React.FC<IFooter> = ({ placeholder }) => {
	const a_aurora = [
		{
			label: 'Home',
			ico: '',
			path: '/'
		},{
			label: 'Sobre nós',
			ico: '',
			path: '/sobre-nos'
		},{
			label: 'Política de entrega',
			ico: '',
			path: '/politica-de-entrega'
		},{
			label: 'Dúvidas Comuns',
			ico: '',
			path: '/duvidas-comuns'
		},{
			label: 'Termos de garantia',
			ico: '',
			path: '/termos-de-garantia'
		},{
			label: 'Central de ajuda',
			ico: '',
			path: '/central-de-ajuda'
		}	
	]

	const contato = [
		{
			label: 'Whatsapp',
			ico: 'fab fa-whatsapp',
			path: '21 3172-2321'
		},{
			label: 'E-mail',
			ico: 'fas fa-envelope',
			path: 'contato@auroramoveis.com.br'
		},{
			label: 'Facebook',
			ico: 'fab fa-facebook-f',
			path: 'fb.me/auroramoveisrj'
		},{
			label: 'Instagram',
			ico: 'fab fa-instagram',
			path: 'instagram.com/auroramoveis'
		}		
	]	

	const paymentMethods = ['amazon','mastercard','visa','apple-pay']		

	return (
		<Container>
			<FooterInner>
				<Wrapper className="wrapper">
					<Column flex="265px">
						<Logo>
						<Link to={
								{
									pathname: '/',
									state: {
										title: 'Aurora Móveis'
									}
								}
							}><Img height={160} src='/static/logo.jpg' /></Link>
						</Logo>
						<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit, urna id feugiat consequat, diam nulla ultricies ex, vel efficitur turpis diam ut dui. Donec fermentum orci in erat consequat sagittis.</Description>
					</Column>
					<Column>
						<ColumnTitle>A Aurora Móveis</ColumnTitle>
						<Navigation links={a_aurora} />
					</Column>
					<Column>
						<ColumnTitle>Fale Conosco</ColumnTitle>
						<Navigation links={contato} />
					</Column>	
					<Column>
						<ColumnTitle>Pagamento</ColumnTitle>
						<PaymentMethods>
							{paymentMethods.map((o:any, index:number) => (
								<PaymentMethod key={index} className={`pf-2x pf-${o}`}></PaymentMethod> 
							))} 
						</PaymentMethods>
					</Column>								
				</Wrapper>
			</FooterInner>
			<Copyright>
				<Wrapper className="wrapper">
					Aurora Móveis © {new Date().getFullYear()} Todos os Direitos Reservados - Aurora Móveis - 32.861.780/00001-50
				</Wrapper>
			</Copyright>						
		</Container>
	);
};
