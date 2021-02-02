import React, {Component} from 'react'

// import images
import AlterSport from '../../assets/image/alter_sport.png'
import CleaningService from '../../assets/image/cleaning_service.png'
import CreativePhoto from '../../assets/image/creative_photo.png'
import SpaBeauty from '../../assets/image/spa_beauty.png'


export default class ClientSection extends Component {
    render() {
        return (
            <div className='client__section'>
                <div className="container">
                    <div className="row">
                        <div className="col text-center mb-5 client__logo">
                            <img src={AlterSport} data-animate-in="fadeIn" className='img-fluid client__image' alt="Alter sport" />
                        </div>
                        <div className="col text-center mb-5 client__logo">
                            <img src={CleaningService} data-animate-in="fadeIn" data-animate-in-delay="300" className='img-fluid client__image' alt="Cleaning service" />
                        </div>
                        <div className="col text-center mb-5 client__logo">
                            <img src={CreativePhoto} data-animate-in="fadeIn" data-animate-in-delay="600" className='img-fluid client__image' alt="Creative" />
                        </div>
                        <div className="col text-center mb-5 client__logo">
                            <img src={SpaBeauty} data-animate-in="fadeIn" data-animate-in-delay="900" className='img-fluid client__image' alt="Spa beauty" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}