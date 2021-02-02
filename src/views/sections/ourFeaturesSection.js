import React, {Component} from 'react'
import HeaderImage from "../../assets/image/app_preview_2.png";

export default class OurFeaturesSection extends Component {
    render() {
        return (
            <section className='features ourFeatures__home'>
                <div className="container">
                    <h5 className="display-5 text-center mb-5" data-animate-in="down">
                        چرا ما رو انتخاب کنید
                    </h5>
                    <div className="row">
                        <div className="col-sm-3 text-end mt-4">
                            <p className="mb-3 text-center" data-animation="zoomReverseIn" data-animation-delay="300ms">
                                <i className="fas fa-rocket ourFeatures__icon" id="rocket__icon"></i> <br/>
                                <h5 className="mt-3">
                                    بسیار سریع
                                </h5>
                                <p className="mt-3">
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                                </p>
                            </p>
                        </div>
                        <div className="col-sm-3 text-end mt-4">
                            <p className="mb-3 text-center" data-animation="zoomReverseIn" data-animation-delay="400ms">
                                <i className="fas fa-user-check ourFeatures__icon" id="user__icon"></i> <br/>
                                <h5 className="mt-3">
                                    بسیار سریع
                                </h5>
                                <p className="mt-3">
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                                </p>
                            </p>
                        </div>
                        <div className="col-sm-3 text-end mt-4">
                            <p className="mb-3 text-center" data-animation="zoomReverseIn" data-animation-delay="500ms">
                                <i className="fas fa-ad ourFeatures__icon" id="ad__icon"></i> <br/>
                                <h5 className="mt-3">
                                    بسیار سریع
                                </h5>
                                <p className="mt-3">
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                                </p>
                            </p>
                        </div>
                        <div className="col-sm-3 text-end mt-4">
                            <p className="mb-3 text-center" data-animation="zoomReverseIn" data-animation-delay="600ms">
                                <i className="fas fa-money-bill-wave ourFeatures__icon" id="money__icon"></i> <br/>
                                <h5 className="mt-3">
                                    بسیار سریع
                                </h5>
                                <p className="mt-3">
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-sm-3 text-end mt-4 mx-auto">
                            <p className="mb-3 text-center" data-animation="zoomReverseIn" data-animation-delay="300ms">
                                <i className="fas fa-phone ourFeatures__icon" id="phone__icon"></i> <br/>
                                <h5 className="mt-3">
                                    بسیار سریع
                                </h5>
                                <p className="mt-3">
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                                </p>
                            </p>
                        </div>
                        <div className="col-sm-3 text-end mt-4 mx-auto">
                            <p className="mb-3 text-center" data-animation="zoomReverseIn" data-animation-delay="200ms">
                                <i className="fas fa-tty ourFeatures__icon" id="tty__icon"></i> <br/>
                                <h5 className="mt-3">
                                    بسیار سریع
                                </h5>
                                <p className="mt-3">
                                    این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}