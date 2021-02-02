import React, {Component} from 'react'
import HeaderImage from '../../assets/image/app_preview_1.png'

import Navbar from "../components/navbar";

export default class HeaderSection extends Component {
    render() {
        return (
            <section className='features header__home' id="home">
                <Navbar/>
                <div className="container" id='container__home'>
                    <div className="row">
                        <div className="col">
                            <h1 className="display-3 text-end mt-5" data-animate-in="up">امور مالی خود را <br/> راحت تر مدیریت کنید</h1>
                            <p className='text-end mt-4' data-animate-in="right">
                                سایت دارای ویژگی هایی برای مشاهده و مدیریت امور مالی ما، مانند انتقال و آمار است
                            </p>
                        </div>
                        <div className="col text-center mt-2">
                            <img src={HeaderImage} className='img-fluid image__header'  data-animation="zoomIn" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}