import styled, { css } from 'styled-components';

interface ICart {
    currency?:string;
}

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    color: white;
`;

export const CartValue = styled.p`
    font-weight: 300;
    font-size: .9rem;
`;

export const Ico = styled.i<ICart>`
    background-color: rgba(0,0,0,.1);
    padding: 10px;
    margin-right: 10px;
    font-size: 40px;
    border-radius: 5px;
    ${({ currency }) =>
    currency &&
    css`
        &::before {
            content: '${currency}'
        }
    `}  
`;
