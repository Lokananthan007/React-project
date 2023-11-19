import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import img1 from './images/13.jpg'
import img2 from './images/14.jpg'
import img3 from './images/15.jpg'
import React from 'react';


function Service(){

    return(
        <div id="service">
            <div className="row">
                <p>MODERN EQUIPMENT</p>
                <h2>Professional washing and cleaning of your car</h2>
                <div className="col">
                    <div className='row'>
                        <img src={img1} alt='car service'></img>
                        <h6>$8000</h6>
                    </div>
                    <div className='row2'>
                        <h6 className='ps-4'>Contactless Washing</h6>
                        <p className='ps-4'>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        <Link to="/" className='link ps-4'>Detail<MdArrowForwardIos/></Link>
                    </div>
                </div>
                <div className="col">
                    <div className='row'>
                        <img src={img2} alt='car service'></img>
                        <h6>$11000</h6>
                    </div>
                    <div className='row2'>
                        <h6 className='ps-4'>Safety Materials</h6>
                        <p className='ps-4'>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        <Link to="/" className='link ps-4'>Detail<MdArrowForwardIos/></Link>
                    </div>
                </div>
                <div className="col">
                    <div className='row'>
                        <img src={img3} alt='car service'></img>
                        <h6>$10000</h6>
                    </div>
                    <div className='row2'>
                        <h6 className='ps-4'>Extensive Cleaning</h6>
                        <p className='ps-4'>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        <Link to="/" className='link ps-4'>Detail<MdArrowForwardIos/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Service;