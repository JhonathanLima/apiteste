import React, {Component}from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getSummary } from './estoqueActions'
import ContentHeader from '../common/templates/contentHeader'
import Content from '../common/templates/content'
import ValueBox from '../common/widget/valuebox'
import Row from '../common/layout/row'

class Estoque extends Component {

    componentWillMount(){
        this.props.getSummary()
    }

    render() {
        const { entradaEstoque, saidaEstoque } = this.props.summary
        return (
            <div>
                <ContentHeader title='Estoque' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='plus'
                            value={` ${entradaEstoque}`} text='Total de Entradas'/>
                        <ValueBox cols= '12 4' color ='red' icon='minus'
                            value={` ${saidaEstoque}`} text='Total de Entradas'/>
                        <ValueBox cols= '12 4' color ='blue' icon='balance-scale'
                            value={` ${entradaEstoque - saidaEstoque}`} text='Total'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.estoque.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Estoque)