import React, { useContext, useEffect, useState, InputHTMLAttributes } from 'react';
import { useHistory, useLocation, Link } from "react-router-dom";

import { 
	Submenu,
	Ico,
	NavItem,
	Nav
} from './styles';

interface INavigation extends InputHTMLAttributes<HTMLInputElement> {
	links: any;
	horizontal?: boolean;
}

export const Navigation: React.FC<INavigation> = ({ horizontal, links }) => {
	const history = useHistory();
	const location = useLocation();
	const _ = require("lodash");
	let [categories, setCategories] = useState<any>([]);
	
	useEffect(() => {
		let categories = links.filter((o:any) => {
			return o.parent
		});
		setCategories(_.groupBy(categories, 'parent'));
	}, [links]);

	useEffect(() => {
		if(location.state!==undefined) {
			document.title = `Aurora Móveis ${location.pathname !== '/' ? ' - ' + location.state.title : ''}`;
		}
	}, [history, location]);	

	const itemsRender = () => {
		return <>
			{links.map((o:any, index:number) => (
				<>
					{!o.parent || o.parent == 0 ? <NavItem key={index} hasIco={o.ico} active={history.location.pathname == o.path ? true : false}>
						<>
							{o.ico ? <>
								<Ico className={o.ico} /> 
								<span>
									<p>
										<strong>{o.label}</strong>
							<small><Link to={
								{
									pathname: o.path,
									state: {
										title: o.title || o.label
									}
								}
							}>{o.path}</Link> {categories[o.id] ? <i className="fas fa-angle-down"/> : null}</small>
									</p>
								</span>
							</> :  <Link to={
								{
									pathname: o.path,
									state: {
										title: o.title || o.label
									}
								}
							}>{o.label} {categories[o.id] ? <i className="fas fa-angle-down"/> : null}</Link>}

							{categories[o.id] ? 
								<Submenu className="submenu">
									{categories[o.id].map((o:any) => (
										<NavItem hasIco={o.ico} active={history.location.pathname == o.path ? true : false}>
											<Link to={
												{
													pathname: o.path,
													state: {
														title: o.title || o.label
													}
												}
											}>{o.label}</Link>
										</NavItem>
									))} 
								</Submenu>
							: null}
						</>
					</NavItem> : null}
				</>
			))} 
		</>;
	}; 	

	return (
		<Nav className="navigation" horizontal={horizontal}>
			<>{itemsRender()}</>
		</Nav>
	);
};
