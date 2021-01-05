import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

import GlobalStyle from './styles/global';

import Context from './context/';

import mockapi from './services/mock-api';

import Spinner from './components/Spinner/Spinner';


export default function App() {
	const [signMsg, setSignMsg] = useState<any>({});
	const [products, setProducts] = useState<any>([]);
	const [registerMsg, setRegisterMsg] = useState<any>({});
	const [title, setTitle] = useState<any>();
	const [data, setData] = useState<any>([]);
	const [token, setToken] = useState<any>();
	const [categories, setCategories] = useState<any>([]);
	const [isLoading, doLoading] = useState<any>(false);
	const [user, setUser] = useState<any>({});

	useEffect(() => {
		console.log(process.env.NODE_ENV);
	}, []);  	

	useEffect(() => {
		localStorage.setItem('categories', '');

		if(localStorage.getItem('categories')=='') {
			doLoading(true);

			mockapi.get(`/wp-json/wp/v2/produtos_categories?per_page=${100}`).then(response => {
				setCategories(response.data);
				localStorage.setItem('categories', JSON.stringify(response.data));
			}).then(() => {
			  doLoading(false);
			})  
		}
	}, []);

	useEffect(() => {
		if(signMsg.msg !== null) {
			setTimeout(function(){
				setSignMsg({
					status: null,
					msg: null
				});
			}, 1000);	
		}
		if(registerMsg.msg !== null) {
			setTimeout(function(){
				setRegisterMsg({
					status: null,
					msg: null
				});
			}, 1000);	
		}		
	}, [signMsg, registerMsg]);  

	return (
		<Context.Provider value={{
			setProducts: setProducts,
			products,				
			setUser: setUser,
			user,				
			doLoading: doLoading,
			isLoading,					
			setCategories: setCategories,
			categories,				
			setTitle: setTitle,
			title,			
			setToken: setToken,
			token,				
			registerMsg: registerMsg,
			setRegisterMsg,					
			signMsg: signMsg,
			setSignMsg					
		}}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
			<GlobalStyle />
			<Spinner isShown={isLoading} />
		</Context.Provider>
	);
}
