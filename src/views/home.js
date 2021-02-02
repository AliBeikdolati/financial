import React, {Component} from 'react'

import '../assets/css/styles.css'
import '../assets/css/animation/animate1.css'
import '../assets/css/animation/animate2.css'


// add js
import '../assets/js/animation/animate1'
import '../assets/js/animation/animate2'



import HeaderSection from "./sections/headerSection";
import ClientSection from "./sections/ClientsSection";
import AccountSection from "./sections/myAccountSection";
import BusinessSection from "./sections/businessSecion";
import OurFeaturesSection from "./sections/ourFeaturesSection";
import PricingSection from "./sections/pricingSection";
import CustomerServiceSection from "./sections/CustomerServiceSection";
import ContactSection from "./sections/contactSection";
import FooterSection from "./sections/footerSection";



export default class Home extends Component{
    render() {
        return (
            <div dir="rtl">
                <HeaderSection />
                <ClientSection />
                <AccountSection />
                <BusinessSection />
                <OurFeaturesSection />
                <PricingSection />
                <CustomerServiceSection />
                <ContactSection />
                <FooterSection />
            </div>
        )
    }
}