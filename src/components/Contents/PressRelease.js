import React from "react";
import ContentContainer from "./ContentContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import CalendarContainer from "./CalendarContainer";

export default function PressRelease({ pressRelease }) {
  const { description, title } = pressRelease;

  return (
    <ContentContainer>
      <div className="flex justify-start items-center mb-3">
        <FontAwesomeIcon
          className="text-green-700"
          icon={faNewspaper}
          size="2xl"
        />
        <h5 className="text-gray-900 text-xl font-medium mb-2 ml-3">{title}</h5>
      </div>
      <CalendarContainer />
      <div>
        {description.map((value, index) => (
          <p className="mb-5" key={index}>
            {value}
          </p>
        ))}
      </div>
    </ContentContainer>
  );
}
