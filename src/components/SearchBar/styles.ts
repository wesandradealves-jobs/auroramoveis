import styled, { css } from 'styled-components';

interface ISeaerchBar {
}

export const Container = styled.form`
	flex: 1;
	padding: 0 15px 0 25px;
`;

export const Search = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	background: rgba(0,0,0,.1);
	padding: 10px 15px;
	border-radius: 999px;
`;

export const Button = styled.button`
	flex: 0 0 auto; 
	background: none;
	border: 0;
`;

export const SearchField = styled.input`
	flex: 1;
	padding-right: 10px;
	background: transparent;
	color: white;
	border: 0;
	font-weight: 300;
	font-size: .9rem;
    &[placeholder]{
		color: white
	}
    &::-moz-placeholder{
		color: white
	}
    &::-webkit-input-placeholder{
		color: white
	}
    &:-ms-input-placeholder {
		color: white
	}
`;

export const Ico = styled.i`
	color: white;
	font-size: 19px;
`;