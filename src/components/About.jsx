import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col ">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r to-pink-600 from-amber-400 text-transparent bg-clip-text inline">
              About Me
            </h2>
            <p className="text-base lg:text-lg">
              Hey ! i am Swayam Naik , a frontend Developer, java programmer ,
              UI/UX designer and a tech enthusiast. I am also a part time
              guitarist and a singer . "Music has has always fascinated me.😌 ".
              A quick learner always seeking for opportunity of growth and
              developement in skills. Connect with be by filling up the below
              contact form . You and me can win worlds !!...
            </p>
          </div>
        </div>

        <img
          src={about}
          alt=""
          className="mx-auto rounded-3xl py-8 md:py-0 "
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};

export default About;
