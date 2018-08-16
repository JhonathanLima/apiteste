import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import Home from '../home/home'
import Cheque from '../cheque/cheque'
import Pedido from '../pedido/pedido'
import Estoque from '../estoque/estoque'
import Funcionario from '../Funcionario/funcionario'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home}/>
        <Route path='/cheques' component={Cheque}/>
        <Route path='/pedidos' component={Pedido}/>
        <Route path='/estoque' component={Estoque}/>
        <Route path='/funcionarios' component={Funcionario}/>
        <Redirect from= '*' to= '/' />
    </Router>
)