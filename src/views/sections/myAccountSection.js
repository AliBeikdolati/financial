import React, {Component} from 'react'
import Navbar from "../components/navbar";
import HeaderImage from "../../assets/image/app_preview_2.png";

export default class AccountSection extends Component {
    render() {
        return (
            <section className='features myaccount__home' id="features">
                <div className="container">
                    <div className="row">
                        <div className="col text-center mt-4">
                            <img src={HeaderImage} data-animation="flipInY" className='img-fluid image__header' alt=""/>
                        </div>
                        <div className="col text-end mt-4" data-animate-in="up">
                            <p className="mb-3">
                                <i className="fas fa-cubes myaccount__icon"></i> <br/>
                                <h5 className="mt-2">
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن
                                    آزمایشی است.این یک متن آزمایشی است.
                                </h5>
                            </p>
                            <p className="mb-3">
                                <i className="fas fa-key myaccount__icon"></i> <br/>
                                <h5 className="mt-2">
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن
                                    آزمایشی است.این یک متن آزمایشی است.
                                </h5>
                            </p>
                            <p className="mb-3">
                                <i className="fas fa-laptop myaccount__icon"></i> <br/>
                                <h5 className="mt-2">
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن
                                    آزمایشی است.این یک متن آزمایشی است.
                                </h5>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}