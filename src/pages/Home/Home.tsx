import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Vitrine,
	ProductList,
	ProductCard,
	Column,
	Title,
	ScaledThumbnail,
	BottomText } from './styles';

import Context from '../../context';

import mockapi from '../../services/mock-api';

const Home: React.FC = () => {
	const _ = require('lodash');
	const store = useContext(Context);
	const history = useHistory();
	const [products, setProducts] = useState<any>([]);
	const handleClick = (o) => {
		history.replace({
			pathname: o.path,
		})			
	}	
	
	useEffect(() => {
		mockapi.get(`/wp-json/wp/v2/produtos?per_page=${100}`).then(response => {
			return response.data;
		}).then((data) => {
			setProducts(_.chain(data).groupBy(o => o.category).value())
		})
	}, []);	

	// useEffect(() => {
	// 	if(Object.keys(store.products).length !== 0) {
	// 		setProducts(store.products)
	// 	}
	// }, [store]);

	return (
		<>
			<Vitrine className="vitrine">
				{store.categories.filter((o:any) => o.acf.ativa && o.acf.destaque).map((o:any) => {
					return {
						...o,
						id: o.id,
						label: o.name,
						thumbnail: o.acf.thumbnail,
						isActive: o.acf.ativa,
						isFeatured: o.acf.destaque,
						path: `/produtos/${o.slug}`,
						parent: o.parent
					}
				}).map((o:any) => (
					<Column onClick={e => history.replace({
						pathname: o.path,
						state: {
							title: o.name
						}
					})} key={o.id} thumbnail={o.acf.thumbnail}>
						<Title>{o.name}</Title>
						{o.acf.thumbnail ? <ScaledThumbnail className="scaled-thumbnail" thumbnail={o.acf.thumbnail} /> : null}
					</Column>
				))} 
			</Vitrine>
			<ProductList>
				{/* <>{products.length ? products.map((o:any, index:any) => (
					<>{index}</>
				)) : ''}</> */}
			</ProductList>
			<BottomText><span>A <strong>Aurora Móveis</strong> tem o prazer em atende-lo!</span><br/><br/>
				Navegando pelo nosso site você encontra os melhores móveis, camas solteiro ou casal, cômodas, guarda roupas, colchões, painéis para TV, home estante, rack, sofá cama, mesas, aparadores, armários multiuso, sofás e muito mais para a decoração da sua casa, podendo pagar em até 12x no cartão de crédito, ou com 27% de desconto para pagamento à vista em espécie, ou 25% de desconto no débito. São muitas promoções e as melhores marcas, que valorizam você e a sua casa.
				<br/><br/>
				Aqui você conta com a comodidade de comprar online pelo site.
				Essas facilidades você só encontra aqui na Aurora Móveis!</BottomText>
		</>  
	);
};

export default Home;