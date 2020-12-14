import React from "react";

interface IContextProps {
	setUser?: any;
	user?: any;	
	setTitle?: any;
	title?: any;	
	doLoading?: any;
	isLoading?: any;
	sign?: any;
	doSign?: any;
	registerMsg?: any;
	setRegisterMsg?: any;	
	signMsg?: any;
	setSignMsg?: any;
	setToken?: any;	
	token?: any;	
	cart?: any;
	setCart?: any;	
	data?: any;
	setData?: any;	
	categories?: any;
	setCategories?: any;				
	dispatch?: ({type}:{type:string}) => void;
}

const Context = React.createContext({} as IContextProps);

export default Context;