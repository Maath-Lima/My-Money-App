// Componente react
import React from 'react'

// Componentes que compõem o template
import '../common/template/dependencies'
import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'

// Componente de Rotas para navegação
import Routes from './routes'

export default props => (
    <div className = 'wrapper'>
       <Header />
       <Sidebar />
       <div className='content-wrapper'>
           <Routes/>
       </div>
       <Footer />
    </div>
)