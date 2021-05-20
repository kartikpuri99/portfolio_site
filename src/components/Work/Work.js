import React from "react";
import { Fade } from "react-reveal";
import Heading from "../../utils/Heading";
import "./Work.css";
import WorkCard from "../../utils/WorkCard/WorkCard";
import Cowin from "../../assests/Cowin.JPG";
import DevConnector from "../../assests/DevConnector.JPG";
import Ecommerce from "../../assests/E-Commerce.JPG";
import NewsApp from "../../assests/NewsApp.JPG";
import BookStore from '../../assests/BookStore.JPG'

const Work = () => {
  const workList = [
    {
      title: "CoWin",
      description:
        "All-in-one COVID App which provides current covid cases around the world, gives daily news related to COVID, and gives the current slot availability of COVID vaccine in your area.",
      image: Cowin,
      techlist: ["ReactJS", "NewsAPI", "ChartJS"],
      githubLink: "https://github.com/kartikpuri99/COVID-19-Tracker",
    },
    {
      title: "Book Store",
      description:
        "A online book shopping portal which allows a buyer to look for different books from the catalog and can order them online.Also the admin can add new books to the catalog which he wishes to sell.",
      image: BookStore,
      techlist: ["ReactJS", "NodeJS","MongoDB"],
      githubLink: "https://github.com/kartikpuri99/Book_Store",
    },
    {
      title: "DevConnector",
      description:
        "A place where developers from various fields can check on each others profile as well as can see their github repos and can post something,comment on others post.",
      image: DevConnector,
      techlist: ["ReactJS", "NodeJS", "MongoDB"],
      githubLink: "https://github.com/kartikpuri99/Developers-Social-Media",
    },
    {
      title: "ProShop",
      description:
        "A Ecommerce website made using MERN stack where people from anywhere in the world can buy or sell their products. It has build in authentication along with auto SignIn functionality.",
      image: Ecommerce,
      techlist: ["ReactJS", "NodeJS", "MongoDB"],
      githubLink: "https://github.com/kartikpuri99/Ecommerce-Website",
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
