import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Image_One from '../Backgrounds/sliderImage01-01.jpg'
import Image_Two from '../Backgrounds/sliderImage02-01.jpg'
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import UsersIcon from '../Backgrounds/Users_icon.png'
import Graduate from '../Backgrounds/graduate.png'
import Hat from '../Backgrounds/Hat.png'

export default function Home() {
  return (
    <div>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 h-50'
        itemId={1}
        src={Image_One}
        alt='...'
      >
        <h5>ICS Centre</h5>
        <p>A Journey to Excellence</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 h-50'
        itemId={2}
        src={Image_Two}
        alt='...'
      >
        <h5>ICS Centre</h5>
        <p>A Journey to Excellence</p>
      </MDBCarouselItem>
    </MDBCarousel>

    <section class="text-center bg-light pt-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div>
                    <center><img
                        alt="graduate"
                        src={Graduate}
                        width="100px"
                        height="100px"
                    /></center>
                  </div>
                    <h3>
5000 YEARS</h3>
                    <p class="lead mb-5 fw-normal">OF COLLECTIVE EXPERIENCE</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                <div>
                    <center><img
                        alt="userIcon"
                        src={UsersIcon}
                        width="100px"
                        height="100px"
                    /></center>
                  </div>
                    <h3>200+</h3>
                    <p class="lead mb-5 fw-normal">FACULTY SUPPORTIVE MEMBERS</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                <div>
                    <center><img
                        alt="hat"
                        src={Hat}
                        width="100px"
                        height="100px"
                    /></center>
                  </div>
                    <h3>15+ YEARS</h3>
                    <p class="lead mb-5 fw-normal">OF EXISTENCE</p>
                </div>
            </div>
        </div>
    </div>
</section>






<nav className="navbar navbar-expand-lg footer_bg text-light">
<div className="container text-center text-md-start mt-5">
<div className="row mt-3">
    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
    <p>
        Along with geographical restrictions, time is the key factor
        that both learners and teachers have to face in learning.
        Blended learning, on the other hand, facilitates learning
    </p>
    </div>
    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    <h6 className="text-uppercase fw-bold mb-4"> Courses</h6>
    <p>
        <a href="#!" className="text-reset">
        Python{" "}
        </a>
    </p>
    <p>
        {" "}
        <a href="#!" className="text-reset">
        ADBMS
        </a>
    </p>
    <p>
        <a href="#!" className="text-reset">
        Development
        </a>
    </p>
    <p>
        <a href="#!" className="text-reset">
        programmimg
        </a>
    </p>
    </div>
    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    <h6 className="text-uppercase fw-bold mb-4">Services</h6>
    <p>
        {" "}
        <a href="#!" className="text-reset">
        Online Library
        </a>{" "}
    </p>
    <p>
        {" "}
        <a href="#!" className="text-reset">
        Webinars
        </a>{" "}
    </p>
    <p>
        {" "}
        <a href="#!" className="text-reset">
        Forums
        </a>{" "}
    </p>
    <p>
        <a href="#!" className="text-reset">
        Survey
        </a>{" "}
    </p>
    </div>
    <div className="col-md-8 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
    <p>
        <FaAddressCard /> Colombo, MD 2004, Lotus road
    </p>
    <p>
        <MdEmail /> icsinfo@rmail.com{" "}
    </p>
    <p>
        <MdCall /> + 94 234 567 88
    </p>
    <p>
        <MdCall /> + 94 234 567 89
    </p>
    </div>
</div>
</div>
</nav>

</div>


  );
}