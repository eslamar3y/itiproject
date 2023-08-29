import React from 'react'
import Slider from '../components/Slider'
import ListOfCards from '../components/content/ListOfCards'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Header />
            <Slider />
            <ListOfCards />
            <Footer />
        </div>
    )
}

export default Home