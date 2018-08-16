import React, {Component} from 'react'

import ContentHeader from '../common/templates/contentHeader'
import Content from '../common/templates/content'

class Home extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='CVC sistema' small='Versão 1.0' />
                <Content>
                    Home
                </Content>
            </div>
        )
    }
}

export default Home