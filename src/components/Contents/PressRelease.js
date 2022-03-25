import React from "react";
import ContentContainer from "./ContentContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import CalendarContainer from "./CalendarContainer";

import pressRelease from "../../data/home/pressRelease";

export default function PressRelease() {
  return (
    <ContentContainer>
      <div className="flex justify-start items-center lg:mb-5 mb-8 ">
        <FontAwesomeIcon
          className="text-primary"
          icon={faNewspaper}
          size="2xl"
        />
        <h5 className="text-primary font-semibold lg:text-xl text-lg ml-3">
          প্রেস রিলিজ
        </h5>
      </div>

      <div>
        {pressRelease.map((pressRelease, index) => (
          <div key={index} className="flex justify-center items-start mb-5">
            <CalendarContainer pressRelease={pressRelease} />
            <p className="pl-5 line-clamp-3 text-sm text-bodyText font-semibold">
              {pressRelease.description}
            </p>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
}
