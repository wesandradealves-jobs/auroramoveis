import React, { useContext, useEffect, InputHTMLAttributes } from 'react';
import { useHistory } from "react-router-dom";
import Context from '../../context/';
import { 
	CartValue,
	Ico,
	Container
} from './styles';

interface ICart extends InputHTMLAttributes<HTMLInputElement> {
	currency: string;
}

export const Cart: React.FC<ICart> = ({ currency }) => {
	const history = useHistory();
	const cart = 0.00;
	const store = useContext(Context);

	const handleFloat = (s) => {
		return parseFloat(s).toFixed(2)
	} 	

	return (
		<Container onClick={e => history.replace(!localStorage.getItem('token') || !store.token ? {
			pathname: '/login',
			state: { title: "Login"}								
		} : {
			pathname: '/minha-conta',
			state: { title: "Minha Conta"}								
		})}>
			<Ico className="fas fa-shopping-cart" />
			<CartValue>{`${currency} ${handleFloat(cart)}`}</CartValue>
		</Container>
	);
};
