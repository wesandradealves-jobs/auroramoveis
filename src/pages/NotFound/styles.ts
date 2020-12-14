import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 30px 35px;
	min-height: calc(100vh - 393px);
`;

export const Title = styled.h2`
	font-size: 7rem;
	color: purple;
	font-weight: bold;
	font-weight: 300;
	padding: 0 60px;
	text-align: center;
`;

export const Img = styled.img`
	transform: rotateZ(-80deg)
`;

export const SubTitle = styled.small`
	font-weight: 400;
	font-size: 20%;
	display: block;
	color: gray;
	margiM: 30px auto 0;
`;
