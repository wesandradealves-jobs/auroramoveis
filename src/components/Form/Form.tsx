import React, { useEffect, useContext, useState, InputHTMLAttributes } from 'react';

import {
	Footer,
	ErrMsg,
	FormHeader,
	Container,
	FormGroup,
	Label
} from './styles';

import { Button, TextField } from '@material-ui/core';

import MaskedInput from 'react-maskedinput';

import Context from '../../context/';

interface IForm extends InputHTMLAttributes<HTMLInputElement> {
  formInputs: any;
  id?: any;
  title?: string;
  buttonLabel: string;
  errMsg?: any;
  handleSubmit: any;
}

export const Form: React.FC<IForm> = ({ id, formInputs, buttonLabel, title, errMsg, handleSubmit }) => {
	const store = useContext(Context);
	const [state, setState] = useState({id: id});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState(state => ({ ...state, [name]: value }));
	}    

	useEffect(() => {
		type Entries<T> = {
		  [K in keyof T]: [K, T[K]]
		}[keyof T][]

		function entries<T>(obj: T): Entries<T> {
		  return Object.entries(obj) as any;
		}

		for (const [key, input] of entries(formInputs)) {
			if(input.value) {
				setState(state => ({ ...state, [input.name]: input.value }));
			}
		}		
	}, []); 
	
	return (
		<> 
			<FormHeader>{title}</FormHeader>
			<Container name="checkoutForm">
				{formInputs.map((o:any, i:number) => (
					<FormGroup className={`type--${o.type}`} flex={o.width} key={i}> 
						{o.label ? <Label>{o.label}</Label> : null}
						{o.type == 'checkbox' || o.type == 'radio' ? <input value={o.value} required={true} name={o.name} onChange={(e) => handleChange(e)} type={o.type} /> : o.mask ? <MaskedInput required={true} mask={o.mask ? o.mask : ''} name={o.name} onChange={(e) => handleChange(e)} type={o.type} placeholder={o.placeholder} /> 
							: (o.value ? <input required={true} value={o.value} name={o.name} onChange={(e) => handleChange(e)} type={o.type} placeholder={o.placeholder} /> : <input required={true} name={o.name} onChange={(e) => handleChange(e)} type={o.type} placeholder={o.placeholder} />)}
					</FormGroup>
				))}	
				<FormGroup> 
					<Button onClick={e => handleSubmit(state)}>{buttonLabel}</Button>
					{errMsg !== null ? <ErrMsg>{errMsg}</ErrMsg> : null}
				</FormGroup>
			</Container>
		</>
	);
};
