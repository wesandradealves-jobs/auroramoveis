import styled, { css } from 'styled-components';

interface IFooter {
	flex?: any;
}

export const Container = styled.footer`
	background-color: #8b05be;
	.wrapper {
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
		justify-content: space-between;
	}
	color: white;
`;

export const FooterInner = styled.div`
	.wrapper {
		padding-top: 30px;
		padding-bottom: 0;
		@media screen and (min-width: 814px) {
			padding-bottom: 30px;
		}
	}
`;

export const Copyright = styled.div`
	background-color: rgba(0,0,0,.15);
	.wrapper {
		padding-top: 15px;
		padding-bottom: 15px;
		justify-content: center;
	}	
	font-size: .8rem;
	font-weight: 300;
`;

export const Column = styled.div<IFooter>`
	flex: 0 0 50%;
	margin-bottom: 50px;
    @media screen and (min-width: 814px) { 
		flex:  ${({ flex }) => (flex ? `0 0 ${flex}` : '1')};
		margin-bottom: 0;
    }	
	padding: 0 10px;
	&:first-of-type {
		padding-left: 0;
		padding-right: 30px;
		& ~ *:last-of-type {
			padding-right: 0;
		}
	}
`;

export const ColumnTitle = styled.h3`
	font-weight: 400;
	font-size: 1.2rem;
	margin-bottom: 15px;
`;

export const Description = styled.p`
	font-size: .8rem;
	font-weight: 300;
	line-height: 1.6;
	margin-top: 15px;
`;
