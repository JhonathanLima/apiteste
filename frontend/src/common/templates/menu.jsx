import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path= '#/' label= 'Home' icon='bank'/>
        <MenuTree label= 'Cadastros' icon= 'edit'>
            <MenuItem path='#pedidos'
                label='Pedidos' icon='cart-plus' />
            <MenuItem path='#cheques'
                label='Cheques' icon='money' />
            <MenuItem path='#funcionarios'
                label='Funcionarios' icon='user' />
            <MenuItem path='#estoque'
                label='Estoque' icon='cart-plus' />
        </MenuTree>
    </ul>
)