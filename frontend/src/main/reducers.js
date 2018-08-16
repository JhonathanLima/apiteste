import {combineReducers} from 'redux'

import EstoqueReducer from '../estoque/estoqueReducer'

const rootReducer = combineReducers({
    estoque: EstoqueReducer
})

export default rootReducer