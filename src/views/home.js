import React, {Component} from 'react'

import HeaderSection from "./headerSection";
import ClientSection from "./ClientsSection";

import '../assets/css/styles.css'

export default class Home extends Component{
    render() {
        return (
            <div>
                <HeaderSection />
                <ClientSection />
            </div>
        )
    }
}