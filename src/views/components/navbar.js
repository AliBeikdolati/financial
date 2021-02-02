import React , { Component } from 'react'


export default class Navbar extends Component{
    render() {
        return (
            <div dir='rtl'>
                <nav className="navbar navbar-expand-lg navbar-light pt-3 pb-5">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> علی بیک دولتی </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#home">صفحه اصلی</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pricing-plan">طرح ها</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#features">ویژگی ها</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact-us">ارتباط با ما</a>
                                </li>
                            </ul>
                            <a href="#" className="nav-item me-auto btn header__button" role='button'>دانلود</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}