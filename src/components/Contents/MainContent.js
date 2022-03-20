import React from "react";
import ContentContainer from "./ContentContainer";
// import main component (grid) then add things under the component//

export default function MainContent({ mainContent }) {
  return (
    <ContentContainer>
      <div className="flex justify-start">
        <img
          className="mt-16 w-28 h-28 object-cover rounded-full ring-2"
          src="https://media-eng.dhakatribune.com/uploads/2019/08/new-cid-head-file-photo-1-1567000542725.gif"
          alt=""
        />
        <div className="p-6 flex flex-col justify-center">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {mainContent.title}
          </h5>
          <p className="text-gray-700 text-base mb-4 line-clamp-5">
            {mainContent.description}
          </p>
          <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
        </div>
      </div>
    </ContentContainer>
  );
}
