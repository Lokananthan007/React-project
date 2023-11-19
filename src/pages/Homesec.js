import Button from 'react-bootstrap/Button';
import { PiPlayCircleThin } from 'react-icons/pi';
import VideoModal from './VideoModal';
import { useState } from 'react';
import {HiArrowRight} from 'react-icons/hi';

function Homesec(){
    const [showVideoModal, setShowVideoModal] = useState(false);

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };
    return(
        <div id="home" className='container-fluid'>
            <div className="row container-fluid">
                <div className='col container-fluid'>
                <h1>KEEPING YOUR CAR NEW.</h1>
                <h1>INTERIOR & EXTERIOR CLEANING.</h1>
                <Button className='prim' variant="primary">ORDER NOW</Button>
                <Button className='light' variant="outline-light">READ MORE</Button>
                </div>
            </div>
            <div className='video container-fluid'>
                <div className='col container-fluid'>
                <Button  variant="link" onClick={openVideoModal}>
            <PiPlayCircleThin  className='play'  />
          </Button>
          <VideoModal show={showVideoModal} onHide={closeVideoModal} />
         

                </div>
                <div>
                <p>To celebrate the launch, use discount code 'mobirise' to save 35% until August 2020</p>
                </div>
            </div>
            <div id='con'>
            <div className='row'>
              <div className='col1'>
                <p>Quality Service For You</p>
                <h6>Contactless Car Wash</h6>
                <Button  variant="outline-primary">More about us<HiArrowRight/></Button>
              </div>       
              <div className='col2'>
                <div className='row'>
                  <div className='row1'>
                    <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor purus, suscipit a accumsan quis, blandit a dolor. Morbi quis purus at ipsum tristique varius.</p>
                  </div>
                  <div className='col3'>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor purus, suscipit a accumsan quis, blandit a dolor. Morbi quis purus at ipsum tristique varius.</p>
                  </div>
                  <div className='col4'>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor purus, suscipit a accumsan quis, blandit a dolor. Morbi quis purus at ipsum tristique varius.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
}
export default Homesec;