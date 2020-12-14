import styled, { css } from 'styled-components';

interface IForm {
	active?: boolean;
    flex?: string;
}

export const FormGroup = styled.div<IForm>`
	padding: 0 7.5px 7.5px;
	flex: ${({ flex }) => (flex ? `0 0 ${flex}` : '1')};
	button,
	input {
		background-color: rgba(0,0,0,.02);
		width: 100%;
		color: #516448;
		border-radius: 999px;
	}
	button {
		background-color: #8b05be !important;
		color: white;
		font-size: .9rem;
		[class*="label"] {
			text-transform: initial;
			line-height: 2;
		}
		margin-top: auto;
	}
	input {
		padding: 10px 15px;
	}
	&:last-child {
		flex: 0 0 auto;
		width: 200px;
		margin-left: auto;
	}
	display: flex;
	flex-flow: column;
	position: relative;
	&.type--radio {
	    flex-flow: row-reverse;
	    align-items: center;
	    input {
	    	width: auto;
	    	flex: 0 0 auto;
	    }
	    label {
	    	flex: 1;
	    	padding-left: 10px;
	    }
	}
`;

export const Label = styled.label`
	display: block;
	text-align: left;
	font-size: .8rem;
	margin-bottom: 5px;
	color: #516448;
`;

export const Container = styled.form`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: stretch;
	margin: 0 -7.5px 15px;
`;

export const ErrMsg = styled.p`
	color: coral;
	font-size: .7rem;
	display: block;
	margin: 5px 0 0;
	text-align: right;
	position: absolute;
	right: 7.5px;
	top: 100%;
	white-space: pre-line;
`;

export const Footer = styled.table`
	width: 100%;
`;

export const CustomInput = styled.div<IForm>`
	position: relataive;
	input {
		z-index: 2;
		opacity: 0;
		cursor: pointer;
	    ${({ active }) =>
	    active &&
	    css`
			&:checked + label {
				background-color: white;
			}
	    `}  		
	}
`;

export const Check = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 10px;
	height: 12px;
	z-index: 1;
	border-radius: 999px;
	border: 1px #b3ba90 solid;
`;

export const FormHeader = styled.h3`
	display: block;
	font-size: .9rem;
	margin-bottom: 15px;
	font-weight: 300
`;

