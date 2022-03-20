import React from "react";
import ContentContainer from "./ContentContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import CalendarContainer from "./CalendarContainer";

import pressRelease from "../../data/home/pressRelease";

export default function PressRelease() {
  return (
    <ContentContainer>
      <div className="flex justify-start items-center mb-5">
        <FontAwesomeIcon
          className="text-green-700"
          icon={faNewspaper}
          size="2xl"
        />
        <h5 className="text-gray-900 text-xl font-medium ml-3">প্রেস রিলিজ</h5>
      </div>

      <div>
        {pressRelease.map((pressRelease, index) => (
          <div className="flex justify-center items-start mb-5">
            <CalendarContainer pressRelease={pressRelease} />
            <p key={index} className="pl-5" pressRelease={pressRelease}>
              {pressRelease.description}
            </p>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
}
