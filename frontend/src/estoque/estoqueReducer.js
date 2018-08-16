const INITIAL_STATE = {summary: {entradaEstoque: 0, saidaEstoque: 0}}

export default function(state= INITIAL_STATE, action) {
    switch (action.type) {
        case 'ESTOQUE_SUMMARY_FETCHED':
            return {...state, summary: action.payload.data}
        default:
            return state
    }
}