import React, { Component } from 'react';
import RouterTitle from 'react-router-title';
import {
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom';

import Route from './Route';
 
import MainLayout from '../layouts/MainLayout';

import asyncComponent from '../components/Spinner';

const NotFound = asyncComponent(() =>
    import('./../pages/NotFound/NotFound').then(module => module.default)
)

const Home = asyncComponent(() =>
    import('./../pages/Home/Home').then(module => module.default)
)

const Search = asyncComponent(() =>
    import('./../pages/Search/Search').then(module => module.default)
)

const Sobre = asyncComponent(() =>
    import('./../pages/Sobre/Sobre').then(module => module.default)
)

const Politica = asyncComponent(() =>
    import('./../pages/Politica/Politica').then(module => module.default)
)

const Duvidas = asyncComponent(() =>
    import('./../pages/Duvidas/Duvidas').then(module => module.default)
)

const Termos = asyncComponent(() =>
    import('./../pages/Termos/Termos').then(module => module.default)
)

const Ajuda = asyncComponent(() =>
    import('./../pages/Ajuda/Ajuda').then(module => module.default)
)

const Checkout = asyncComponent(() =>
    import('./../pages/Checkout/Checkout').then(module => module.default)
)

const Login = asyncComponent(() =>
    import('./../pages/Login/Login').then(module => module.default)
)

const MinhaConta = asyncComponent(() =>
    import('./../pages/MinhaConta/MinhaConta').then(module => module.default)
)

const Archive = asyncComponent(() =>
    import('./../pages/Archive/Archive').then(module => module.default)
)

const ProtectedRoute = asyncComponent(() =>
    import('./ProtectedRoute').then(module => module.default)
)

const Routes: React.FC = () => { 
  return (
    <MainLayout>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/produtos/:slug" component={Archive} />
        <Route title="Busca" exact={true} path="/busca/" component={Search} />
        <Route title="Entrar" exact={true} path="/login" component={Login} />
        <Route title="Sobre Nós" exact={true} path="/sobre-nos" component={Sobre} />
        <Route title="Política de Entrega" exact={true} path="/politica-de-entrega" component={Politica} />
        <Route title="Dúvidas Comuns" exact={true} path="/duvidas-comuns" component={Duvidas} />
        <Route title="Termos de Garantia" exact={true} path="/termos-de-garantia" component={Termos} />
        <Route title="Central de Ajuda" exact={true} path="/central-de-ajuda" component={Ajuda} />
        <ProtectedRoute title="Checkout" exact={true} path="/checkout" component={Checkout} />
        <ProtectedRoute title="Minha Conta" exact={true} path="/minha-conta" component={MinhaConta} />
        <Route title="Página não encontrada" exact={true} path="*" component={NotFound} />
      </Switch>
    </MainLayout>
  )
};

export default Routes;
