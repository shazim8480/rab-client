import React from "react";
import ContentContainer from "./ContentContainer";
// import main component (grid) then add things under the component//

export default function MainContent({ mainContent }) {
  return (
    <ContentContainer>
      <div className="lg:flex lg:justify-start">
        <img
          className="lg:mt-12 mt-3 lg:mx-0 mx-auto w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-full"
          src={mainContent.profileImg}
          alt=""
        />
        <div className="p-6 flex flex-col justify-center">
          <h5 className="text-primary text-center lg:text-left lg:text-xl text-lg font-bold mb-2">
            {mainContent.title}
          </h5>
          <p className="text-bodyText text-justify lg:text-left text-sm mb-4 line-clamp-5">
            {mainContent.description}
          </p>
          <p className="text-green-600 text-center lg:text-left text-xs">
            Last updated 3 mins ago
          </p>
        </div>
      </div>
    </ContentContainer>
  );
}
