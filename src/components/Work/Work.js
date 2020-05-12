import React from "react";
import Heading from "../../utils/Heading";
import Carousel from "../../utils/Carousel/Carousel";
import campground from "../../assests/photo-1497900304864-273dfb3aae33.jpg";
import chatapp from "../../assests/1_mLE5ZxhtATxrwh20SL2Tlg.png";
import lyricsapp from "../../assests/41L5tHfpV0L.png";
import covid from '../../assests/free-to-use-sounds-1xT5Yz2Am0M-unsplash.jpg';
import "./Work.css";

const Work = () => {
  return (
    <section id="work" className="Work">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text-center mx-auto mt-4">
              <Heading firstname="My" lastname="Work" />
              <div className="text-muted pt-4">
                Some of my projects and work.
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <div className="col-lg-6 col-md-12 col-sm-12"> */}
          <Carousel
            projectLink="https://github.com/kartikpuri99/chat-app-using-socketio"
            projectText="A chat web app using socketio and made using javascript."
            projectHead="ChatApp"
            projectImage={chatapp}
          />
          <Carousel
            projectLink="https://github.com/kartikpuri99/CAMPGROUND-BLOG"
            projectText="A campground blog where person can upload and edit their blogs."
            projectHead="CampBlog"
            projectImage={campground}
          />
          {/* </div> */}
          {/* <div className="col-lg-6 col-md-12 col-sm-12"> */}
          <Carousel
            projectLink="https://github.com/kartikpuri99/lyric-app"
            projectText="A lyrics app where people can search for a songs lyrics."
            projectHead="LyricsApp"
            projectImage={lyricsapp}
          />
          <Carousel
            projectLink="https://github.com/kartikpuri99/COVID-19-Tracker"
            projectText="A COVID-19 tracker which tells the current number of cases globally/country-wise."
            projectHead="COVID-19 tracker"
            projectImage={covid}
          />
          {/* </div> */}
        </div>
        <div className="row justify-content-center pt-5">
          For more projects checkout my 
          <a href='https://github.com/kartikpuri99' className='ml-1'> GitHub Profile</a>
        </div>
      </div>
    </section>
  );
};

export default Work;
