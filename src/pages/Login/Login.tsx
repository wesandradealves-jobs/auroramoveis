import React, { useState, useEffect, useContext } from 'react';
import emailjs from 'emailjs-com';
import Context from '../../context/';
import {
	Route as ReactDOMRoute,
	RouteProps as ReactDOMRouteProps,
	Redirect,
	useHistory
} from 'react-router-dom';
import {  
	Container,
} from './styles';

import {  
	Row,
	Column
} from '../../styles/globalElements';

import Form from '../../components/Form';

import mockapi from '../../services/mock-api';
import { stringify } from 'querystring';
import { convertToObject } from 'typescript';

const Login: React.FC = () => {
	const history = useHistory();
	const store = useContext(Context);
	const cookie = require('cookie');
	const slugify = require('slugify');
	const hash = require('object-hash');
	const serialize = (obj) => {
		var str = [];
		for (var p in obj)
			if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			}
		return str.join("&");
	}	

	const cadastro = [{
		label: 'Nome',
		type: 'text',
		placeholder: '',
		value: '',
		width: '70%',
		name: 'nome'
	},{
		label: 'CPF',
		type: 'tel',
		placeholder: '',
		value: '',
		mask: '111.111.111-11',
		width: '30%',
		name: 'cpf'
	},{
		label: 'Senha',
		type: 'password',
		placeholder: '',
		value: '',
		width: '100%',
		name: 'password'
	},{
		label: 'Telefone',
		type: 'text',
		placeholder: '',
		value: '',
		mask: '(11) 1 1111-1111',
		width: '30%',
		name: 'telefone'
	},{
		label: 'E-mail',
		type: 'email',
		placeholder: '',
		value: '',
		width: '70%',
		name: 'email'
	},{
		label: 'CEP',
		type: 'text',
		mask: '11.111-111',
		placeholder: '',
		value: '',
		width: '100%',
		name: 'cep'
	},{
		label: 'Endereço',
		type: 'text',
		placeholder: '',
		value: '',
		width: '70%',
		name: 'endereco'
	},{
		label: 'Número',
		type: 'text',
		placeholder: '',
		value: '',
		width: '30%',
		name: 'numero'
	},{
		label: 'Bairro',
		type: 'text',
		placeholder: '',
		value: '',
		width: '33.3333%',
		name: 'bairro'
	},{
		label: 'Cidade',
		type: 'text',
		placeholder: '',
		value: '',
		width: '33.3333%',
		name: 'cidade'
	},{
		label: 'Estado',
		type: 'text',
		placeholder: '',
		value: '',
		width: '33.3333%',
		name: 'estado'
	}];		

	const login = [{
		label: 'Nome de usuário/E-mail',
		type: 'text',
		placeholder: '',
		value: '',
		width: '100%',
		name: 'username'
	},{
		label: 'Senha',
		type: 'password',
		placeholder: '',
		value: '',
		width: '100%',
		name: 'user_pass'
	}];		

	// 

	const get_nonce = new Promise((resolve, reject) => {
		mockapi.get(`/api/get_nonce/?controller=auth&method=generate_auth_cookie`).then(response => {
			resolve(response)
		}).catch(err => reject(err)); 	
	});	

	const generate_auth_cookie = (data) => {
		return new Promise((resolve, reject) => {
			mockapi.get(`/api/auth/generate_auth_cookie/?${serialize(data)}`).then(response => {
				resolve(response)
			}).catch(err => reject(err)); 	
		})
	}

	const auth = (data) => {
		return new Promise((resolve, reject) => {
			get_nonce.then(response => {
				if(response.status == 200) {
					return response.data.nonce
				}
				reject(false)
			}).then(nonce => {
				data = {
					...data,
					nonce: nonce
				}

				generate_auth_cookie(data).then(response => {
					if(!response.data.error) {
						if(response.data.user) {
							return {
								...response.data.user,
								cookie: response.data.cookie
							}
						}
						return response.data.cookie
					} else {
						return response.data
					}
				}).then(response => {
					resolve(response)
				}).catch(err => reject(err));
			}).catch(err => reject(err)); 	
		})	
	}

	const validate_auth_cookie = (cookie) => {
		return new Promise((resolve, reject) => {
			mockapi.get(`/api/auth/validate_auth_cookie/?cookie=${cookie}`).then(response => {
				if(response.status == 200) {
					resolve(response.data.valid)
				}
				reject(false)				
			}).catch(err => reject(err)); 	
		})
	}	

	// 
	
	const updateMeta = (body, metas) => {
		auth({
			username: body.username, 
			password: body.user_pass
		}).then(response => {
			if(response.cookie) {
				validate_auth_cookie(response.cookie).then(valid => {
					if(valid) {
						let uri = `cookie=${response.cookie}`;
	
						for (var key in metas) {
							for (var k in metas[key]) {
								if (uri != "") {
									uri += "&";
								}	
								uri += k + "=" + encodeURIComponent(metas[key][k]);
							}
						}
						
						mockapi.post(`/api/user/update_user_meta_vars/?${uri}`).then(response => {
							if(response.status == 200) {
								store.setRegisterMsg({
									status: true,
									msg: 'Usuário cadastrado com sucesso!'
								});	
						
								emailjs.send('service_m0lmmgr', 'template_81kx7vo', body, 'user_2KJ7x0XAJGykrZoNudROn')
								.then(function(response) {
									console.log(response);
						
									store.doLoading(!!store.isLoading);
								}, function(error) {
									console.log(error);
								});												
							} else {
								store.setRegisterMsg({
									status: false,
									msg: 'Ocorreram erros ao cadastrar seu usuário.'
								});	
							}
						}).catch(err => console.log('Request Failed', err));
					}
				}).catch(err => console.log('Request Failed', err));
			}
		}).catch(err => console.log('Request Failed', err)); 
	}

	const handleForm = (s) => {
		store.doLoading(!store.isLoading);

		if(s.id=='register') {
			auth({
				username: process.env.REACT_APP_WPP_PASSWORD, 
				password: process.env.REACT_APP_WPP_USER
			}).then(response => {
				if(response.cookie) {
					validate_auth_cookie(response.cookie).then(valid => {
						if(valid) {
							if(s.hasOwnProperty('nome') 
								&& s.hasOwnProperty('cpf')
								&& s.hasOwnProperty('password')
								&& s.hasOwnProperty('telefone')
								&& s.hasOwnProperty('email')
								&& s.hasOwnProperty('cep')
								&& s.hasOwnProperty('endereco')
								&& s.hasOwnProperty('numero')
								&& s.hasOwnProperty('bairro')
								&& s.hasOwnProperty('estado')
								&& s.hasOwnProperty('cidade')) {	
								mockapi.get(`/api/get_nonce/?controller=user&method=register`).then(response => {
									if(response.data.nonce) {
										let body = {
											username: slugify(s.nome).toLowerCase(),
											email: s.email,
											nonce: response.data.nonce,
											display_name: s.nome,
											notify: 'no',
											user_pass: s.password
										}
							
										let metas = Object.entries(s).filter(([key, value]) => key !== 'password' 
											&& key !== 'id'
											&& key !== 'email'
											&& key !== 'nome').map(function(o:any, index:any) {
												return {
													[o[0]]:o[1]
												};
										})														
							
										mockapi.get(`/api/user/register/?${serialize(body)}`).then(response => {
											if(response.data.user_id && response.data.cookie_admin) {
												if(response.data.cookie_admin) {
													updateMeta(body, metas);
												}		
											} else {
												store.doLoading(!!store.isLoading);
												
												store.setRegisterMsg({
													status: false,
													msg: 'Usuário já existe'
												});	
											}
							
										}).catch(err => console.log('Request Failed', err));													
									}
								}).catch(err => console.log('Request Failed', err)); 											
							} else {
								store.doLoading(!!store.isLoading);
								store.setRegisterMsg({
									status: false,
									msg: 'Todos os campos devem ser preenchidos.'
								});	
							}		
						}
						return false
					}).catch(err => console.log('Request Failed', err));
				}
			}).catch(err => console.log('Request Failed', err)); 					
		} else {
			if(s.hasOwnProperty('username') 
			&& s.hasOwnProperty('user_pass')) {	
				auth({
					username: s.username, 
					password: s.user_pass
				}).then(response => {
					if(response.error) {
						store.setSignMsg({
							status: false,
							msg: response.error
						});	
					} else {
						validate_auth_cookie(response.cookie).then(valid => {
							if(valid) {
								localStorage.setItem('token', hash(response));
								localStorage.setItem('user', JSON.stringify(response));	
								store.setToken(hash(response));
								store.doLoading(!!store.isLoading);

								setTimeout(function(){
									history.replace({
										pathname: '/minha-conta',
										state: { title: "Minha Conta", user: response }								
									})	
								}, 1000);
							}
							return false
						}).catch(err => console.log('Request Failed', err));
					}
					store.doLoading(!!store.isLoading);
				}).catch(err => console.log('Request Failed', err)); 		
			} else {
				store.doLoading(!!store.isLoading);
				store.setSignMsg({
					status: false,
					msg: 'Todos os campos devem ser preenchidos.'
				});	
			}				
		}
	}   	

	return (
		<Container>
			<Row className="columns">
				<Column flex="40%" className="col">
					<Form 
					errMsg={store.signMsg.msg}
					id="login"
					handleSubmit={(s) => handleForm(s)}
					title="Já tem uma conta? Faça o login."  
					buttonLabel="Entrar" 
					formInputs={login}  />
				</Column>
				<Column flex="60%" className="col">
					<Form 
					errMsg={store.registerMsg.msg}
					id="register"
					handleSubmit={(s) => handleForm(s)}
					buttonLabel="Cadastrar" 
					formInputs={cadastro} 
					title="Ainda não tem uma conta? Cadastre-se agora!" />
				</Column>
			</Row>
		</Container>
	);
};

export default Login;
