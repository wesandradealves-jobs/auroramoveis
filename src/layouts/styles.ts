import styled, { css } from 'styled-components';

interface ILayouts {
    borderStyle?: string;
    color?: string;
}

export const App = styled.div`
    min-width: 737px;
    @media screen and (min-width: 814px) { 
	    min-height: 100vh;
    }
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    overflow: hidden;
`;
export const Main = styled.main`
    padding-top: 30px;
    padding-bottom: 30px;
    flex: 1;
`;
export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: calc(1036px + 70px);
    width: 100%;
    padding-left: 35px;
    padding-right: 35px;
`;
export const Section = styled.section`

`;

