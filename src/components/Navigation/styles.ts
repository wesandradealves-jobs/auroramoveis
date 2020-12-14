import styled, { css } from 'styled-components';

interface INavigation {
    horizontal:boolean;
    active:boolean;
    hasIco:boolean;
}

export const Nav = styled.ul<INavigation>`
    display: flex;
    flex-flow: ${({ horizontal }) => (horizontal ? 'row wrap' : 'column wrap')};
`;

export const Submenu = styled.ul<INavigation>`
    position: absolute;
    top: 100%;
    left: 0;
    width: 280px;
    display: none;
    z-index: 1;
    background-color: white;
    box-shadow: 0px 0px 10px -10px black;
    color: gray;
    > li {
        padding: 5px 15px;
        &:not(:last-child) {
            border-bottom: 1px whitesmoke solid;
        }
    }
`;

export const NavItem = styled.li<INavigation>`
    ${({ horizontal }) =>
    !horizontal &&
    css`
        text-decoration: ${({ active }) => (active ? 'underline' : '')};
    `}	
    font-weight: 300;   
    line-height: ${({ horizontal }) => (horizontal ? 'initial' : '2')};
    ${({ hasIco }) =>
    hasIco &&
    css`
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    `}	    
    p {
        small {
            display: block;
            margin-top: 3px;
        }
    }
    ${({ hasIco }) =>
    hasIco &&
    css`
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    `}	   
    position: relative; 
    &:hover {
        .submenu {
            display: block
        }
    }
`;

export const Ico = styled.i`
    width: 15px !important;
    margin-right: 10px;
    height: auto!important;
    flex: 0 0 auto;
`;