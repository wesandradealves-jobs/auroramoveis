import React, { Component, useContext, useEffect} from 'react';

import {
	useLocation,
	Route as ReactDOMRoute,
	RouteProps as ReactDOMRouteProps,
	Redirect,
} from 'react-router-dom';

import Context from '../context/';

interface RouteProps extends ReactDOMRouteProps {
	component: React.ComponentType;
}

const token = localStorage.getItem('token');

const Route: React.FC<RouteProps> = ({
	component: Component,
	...rest
}) => {
	const store = useContext(Context);
	const location = useLocation();
	
	return (
		<ReactDOMRoute
			{...rest}
			render={() => {
		        return !!token || !!store.token ? (
					<>{location.pathname=='/login' ? <Redirect to={{
						pathname: "/minha-conta",
						state: { title: 'Minha Conta', user: JSON.parse(localStorage.getItem('user')) }
					  }} />  : <Component />}</>
		        ) : (
					<Component />
		        );		        			
			}}
		/>
	);
};

export default Route;
