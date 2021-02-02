import React, { Component } from 'react'

export default class CustomerServiceSection extends Component{
    render() {
        return (
            <section className="text-end customer-service__home">
                <div className="container" data-animate-in="up">
                    <h4 className="display-5 mb-5">
                        سرویس های مشتری
                    </h4>
                    <p className="col-sm-8 text-end mb-3 ms-auto">
                        این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                        این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.
                        این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است.این یک متن آزمایشی است. <br/>
                    </p>
                    <a href="#" className="btn btn-ghost customer-service__btn" role="button">
                        مشاهده بیشتر
                    </a>
                </div>
            </section>
        )
    }
}