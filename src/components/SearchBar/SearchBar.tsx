import React, { useContext, useEffect, useState, InputHTMLAttributes } from 'react';
import { useHistory } from "react-router-dom";
import ico from '../../assets/search.png';

import Context from '../../context/';

import { 
	Search,
	Container,
	SearchField,
	Button,
	Ico
} from './styles';

interface ISearchBar extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
}

export const SearchBar: React.FC<ISearchBar> = ({ placeholder }) => {
	return (
		<Container action="/busca/" id="busca"> 
			<Search>
				<SearchField name="s" type="text" placeholder={placeholder} />
				<Button>
					<Ico className="fas fa-search" />
				</Button>
			</Search> 
		</Container>
	);
};
