import React, { Component, useContext, useEffect } from 'react';

import {
	Route as ReactDOMRoute,
	RouteProps as ReactDOMRouteProps,
	Redirect,
} from 'react-router-dom';

import Context from '../context/';

interface RouteProps extends ReactDOMRouteProps {
	component: React.ComponentType;
}

const token = localStorage.getItem('token');

const ProtectedRoute: React.FC<RouteProps> = ({
	component: Component,
	...rest
}) => {
	const store = useContext(Context);

	console.log(localStorage.getItem('token'), store)

	return (
		<ReactDOMRoute
			{...rest}
			render={() => {
		        return !!token || !!store.token ? (
		            <Component />
		        ) : (
		            <Redirect to={{
						pathname: "/login",
						state: { title: 'Login' }
					  }} />
		        );
			}}
		/>
	);
};

export default ProtectedRoute;
