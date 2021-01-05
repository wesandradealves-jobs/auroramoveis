import styled, { css } from 'styled-components';

interface IHome {
    thumbnail?:string;
}

export const Vitrine = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    height: 400px;
    margin: 0 -7.5px;
`;

export const Column = styled.div<IHome>`
    ${({ thumbnail }) =>
    thumbnail &&
    css`
        background: url(${thumbnail}) center center / cover no-repeat;
    `}  
    cursor: pointer;
    overflow: hidden;
    margin: 7.5px;
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0);
        transition: 500ms ease all;
        z-index: 2;
    }
    &:hover {
        &::after {
            background: rgba(0,0,0,.5);
        }
        .scaled-thumbnail {
            transform: scale(1.1)
        }
    }    
    &:first-child {
        flex: 0 0 100%;
        height: 100%;
        position: relative;
        &:not(:only-child) {
            flex: 0 0 calc(50% - 15px);
            & + * {
                flex: 0 0 calc(50% - 15px);
                height: 100%;
                &:not(:last-child) {
                    height: calc(50% - 15px);
                }
                & ~ * {
                    flex: 0 0 calc(25% - 15px);
                    &:nth-last-child(2),
                    &:last-child {
                        left: 50%;
                        height: 50%;
                        top: calc(-50% - 15px);
                    }
                    &:nth-child(3):last-child {
                        flex: 0 0 calc(50% - 15px)
                    }
                }
            }
        }
    }
`;

export const Title = styled.h3`
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    font-weight: bold;
    font-size: 1.6rem;
    padding: 15px 30px;
    z-index: 3;
`;

export const ScaledThumbnail = styled.div<IHome>`
    display: block;
    position: absolute;
    top: calc(50% - 50%);
    left: calc(50% - 50%);
    height: 100%;
    width: 100%;
    transition: 500ms ease all;
    ${({ thumbnail }) =>
    thumbnail &&
    css`
        background: url(${thumbnail}) center center / cover no-repeat;
    `} 
    z-index: 1;
`;

export const BottomText = styled.p`
    color: gray;
    padding: 60px 0 30px;
    font-weight: 300;
    line-height: 1.4;
    span {
        font-size: 1.4rem;
    }
`;

export const ProductCard = styled.li`

`;

export const ProductList = styled.ul`

`;
