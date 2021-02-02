import React, { Component } from 'react'
import HeaderImage from "../../assets/image/app_preview_2.png";


export default class PricingSection extends Component{
    render() {
        return (
            <section className='features pricing__home' id="pricing-plan">
                <div className="container">
                    <div className="row">
                        <div className="col text-end mt-4" data-animate-in="right">
                            <p className="mb-3">
                                <h5 className="display-4 mt-2">
                                    هزینه برنامه ها
                                </h5>
                                <p>
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است. این یک متن آزمایشی است.این یک متن آزمایشی است.
                                    <br/>
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                                    <br/>
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                                </p>
                            </p>
                        </div>

                        <div className="col text-center mt-4" data-animate-in="up">
                            <div className="price__card mx-auto" id="pricing__card1">
                                <h4 className="card__header ">
                                    هزینه طرح
                                </h4>
                                <p className="display-3">
                                    49.00$
                                </p>
                                <dl className="price-card__features">
                                    <li className="price-card__feature">
                                        این یک متن آزمایشی است
                                    </li>
                                    <li className="price-card__feature">
                                        این یک متن آزمایشی است
                                    </li>
                                    <li className="price-card__feature">
                                        این یک متن آزمایشی است
                                    </li>
                                    <li className="price-card__feature">
                                        این یک متن آزمایشی است
                                    </li>
                                </dl>
                                <a href="#" className="btn btn-outline-dark">
                                    انتخاب طرح
                                </a>
                            </div>
                        </div>
                        <div className="col text-center mt-4" data-animate-in="up">
                            <div className="price__card" id="pricing__card2">
                                <h4 className="card__header ">
                                    هزینه طرح
                                </h4>
                                <p className="display-3">
                                    49.00$
                                </p>
                                <dl className="price-card__features">
                                    <li className="price-card__feature">
                                        این یک متن آزمایشی است
                                    </li>
                                    <li className="price-card__feature">
                                        این یک متن آزمایشی است
                                    </li>
                                    <li className="price-card__feature">
                                        این یک متن آزمایشی است
                                    </li>
                                    <li className="price-card__feature">
                                        این یک متن آزمایشی است
                                    </li>
                                </dl>
                                <a href="#" className="btn btn-outline-dark">
                                    انتخاب طرح
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}