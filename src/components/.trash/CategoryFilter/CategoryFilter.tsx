import React, { InputHTMLAttributes, useContext } from 'react';

import Context from '../../context/';

import ico from '../../assets/arrow-down.png';

import { 
	Option,
	Select,
	Container,
	Button,
	Ico
} from './styles';

interface ICategoryFilter extends InputHTMLAttributes<HTMLInputElement> {
	onChange: any;
	data?: any;
}

export const CategoryFilter: React.FC<ICategoryFilter> = ({ onChange, data }) => {
	const store = useContext(Context);

	const handleFilter = (val: any) => {
		if(val % 1 !== 0) {
			return store.data;
		}
	    return store.data.filter((o:any) => {
			return o.category.includes(val)
		});
	};		

	const handleChange = (e) => {
		onChange(handleFilter(parseInt(e.target.value)));
	} 	

	return (
		<Container> 
			<Select onChange={e => handleChange(e)}>
				<Option>Selecione uma categoria</Option>
				{data.map((o:any, index:number) => (
					<Option key={index} value={o.id}>{o.name}</Option>
				))} 				
			</Select> 
			<Button>		
				<Ico src={ico} />
			</Button>
		</Container>
	);
};
