import React, {Component} from 'react'
import HeaderImage from "../../assets/image/app_preview_3.png";

export default class BusinessSection extends Component {
    render() {
        return (
            <section className='features business__home'>
                <div className="container">
                    <div className="row">
                        <div className="col text-end mt-4" data-animate-in="right">
                            <h4 className='display-5 mb-4'>
                                تجارت الکترونیکی
                                <br/>
                                به راحتی عمل میکند
                            </h4>
                            <p>
                                این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                            </p>
                        </div>
                        <div className="col text-center mt-4">
                            <img src={HeaderImage} data-animate-in="left" className='img-fluid image__header' alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}