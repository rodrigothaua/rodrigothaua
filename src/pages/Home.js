import React from 'react'

import Container from '../containers'
import Footer from '../components/footer'
import Header from '../components/header'
import Form from '../components/form'


const Home = () => {

    return(
        <>
            <Header />
            <Container>
            <Form />
            </Container>
            <Footer />
        </>
    )
}

export default Home