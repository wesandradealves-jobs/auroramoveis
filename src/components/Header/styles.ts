import styled, { css } from 'styled-components';

interface IHeader {
	height?:any;
}

export const Img = styled.img<IHeader>`
	max-height:  ${({ height }) => (height ? `${height}px` : 'initial')};
	display: block;
	margin: 0 auto;
`;

export const Logo = styled.h1`

`;

export const Menu = styled.div`

`;

export const Container = styled.header`
	background-color: #8b05be;
	.wrapper {
		padding-top: 10px;
		padding-bottom: 10px;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
	}
	.navigation {
		color: white;
		margin: 0 -15px;
		> li {
			font-weight: bold;
			padding: 5px 15px;
		}
	}	
`;

export const Contact = styled.p`
	color: white;
	background-color: rgba(0,0,0,.15);
	padding: 6px 10px;
	border-radius: 5px;
	font-size: .8rem;
	margin: 0 25px 0 10px;
	font-weight: 300;
`;

export const ContactTitle = styled.strong`
	display: block;
`;

export const ContactTerm = styled.small`
	display: block;
`;

export const Logout = styled.a`
	color: white;
	span {
		text-decoration: underline;
		&:hover {
			text-decoration: none
		}		
	}
	font-size: .9rem;
	cursor: pointer;
	padding: 0;
    flex: 0 0 100%;
    text-align: right;
    font-size: .7rem;	
`;