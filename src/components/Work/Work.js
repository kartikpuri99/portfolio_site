import React from "react";
import { Fade } from "react-reveal";
import Heading from "../../utils/Heading";
import "./Work.css";
import WorkCard from "../../utils/WorkCard/WorkCard";
import chatApp from "../../assests/slack-chat.JPG";
import DevConnector from "../../assests/DevConnector.JPG";
import Ecommerce from "../../assests/E-Commerce.JPG";
import NewsApp from "../../assests/NewsApp.JPG";

const Work = () => {
  const workList = [
    {
      title: "ChatApp",
      description:
        "A slack chat web app clone made using ReactJS and Firebase where developers can create their profile and can then join channels and can chat with each other.",
      image: chatApp,
      techlist: ["ReactJS", "Redux", "Firebase"],
      githubLink: "https://github.com/kartikpuri99/Slack-Chat",
    },
    {
      title: "ProShop",
      description:
        "A Ecommerce website made using MERN stack where people from anywhere in the world can buy or sell their products. It has build in authentication along with auto SignIn functionality and paypal api for payment.",
      image: Ecommerce,
      techlist: ["ReactJS", "NodeJS", "MongoDB"],
      githubLink: "https://github.com/kartikpuri99/Ecommerce-Website",
    },
    {
      title: "DevConnector",
      description:
        "A place where developers from various fields can check on each others profile as well as can see their github repos and can post something,comment on others post and have to login using their email id.",
      image: DevConnector,
      techlist: ["ReactJS", "NodeJS", "MongoDB"],
      githubLink: "https://github.com/kartikpuri99/Developers-Social-Media",
    },
    {
      title: "News App",
      description:
        "It is a news app which provides latest Indian news using Alan voice assistant.The commands to talk to Alan are described in the site only.",
      image: NewsApp,
      techlist: ["ReactJS", "AlanSDK"],
      githubLink: "https://github.com/kartikpuri99/Voice-assisted-news-app",
    },
  ];
  return (
    <section id="work" className="Work">
      <Fade bottom cascade>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-center mx-auto mt-4">
                <Heading firstname="My" lastname="Work" />
                <div className="text-white pt-4">
                  Some of my projects and work.
                </div>
              </div>
            </div>
          </div>
        
          {workList.map((work, index) => (
            <WorkCard
              key={index}
              index={index}
              title={work.title}
              image={work.image}
              techlist={work.techlist}
              githubLink={work.githubLink}
              description={work.description}
            />
          ))}
        
          <div className="row justify-content-center pt-5 text-white">
            For more projects checkout my
            <a
              href="https://github.com/kartikpuri99"
              className="ml-1 github_link"
            >
              {" "}
              GitHub Profile
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Work;
