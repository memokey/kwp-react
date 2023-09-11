import React from 'react'
import { KWHero } from '../../components/hero/hero'
import  KWVideo  from '../../components/video/video'
import  KWNumberSection from '../../components/numbersection/numbersection'
import  KWServices from '../../components/services/services'
import  KWPropertySection from '../../components/propertysection/propertysection'
import KWNavbar from '../../components/navbar/navbar'
import KWFooter from '../../components/footer/footer'

export const Home = () => {
    return (
        <div>
            <KWNavbar/>
            <KWHero />
            <KWVideo />
            <KWNumberSection />
            <KWServices />
            <KWPropertySection />
        <KWFooter/>
        </div>
    )
}
