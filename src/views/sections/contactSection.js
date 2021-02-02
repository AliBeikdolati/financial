import React, {Component} from 'react'

// import image
import ContactImage from "../../assets/image/illustration_contact.svg"

export default class ContactSection extends Component {
    render() {
        return (
            <section className="contact-us__home" id="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5" data-animate-in="right">
                            <form action="#" className="contact-section__form">
                                <div className="form-floating mb-4">
                                    <input type="text" className="form-control" id="floatingInput"
                                           placeholder="نام و نام خانوادگی"/>
                                    <label htmlFor="floatingInput text-end">نام و نام خانوادگی</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="email" className="form-control" id="floatingEmail"
                                           placeholder="ایمیل"/>
                                    <label htmlFor="floatingEmail">ایمیل</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <textarea className="form-control" placeholder="Leave a comment here"
                                              id="floatingTextarea"/>
                                    <label htmlFor="floatingTextarea">نظرات</label>
                                </div>
                                <input type="submit" className="btn btn-ghost Contact__submit" value="ارسال"/>
                            </form>
                        </div>
                        <div className="col text-center" data-animate-in="left">
                            <img src={ContactImage} className="img-fluid contact-section__image" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}