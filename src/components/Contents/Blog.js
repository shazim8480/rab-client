import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentContainer from "./ContentContainer";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function Blog({ blog }) {
  const { description } = blog;

  return (
    <ContentContainer>
      <div className="flex justify-start items-center mb-5 ">
        <FontAwesomeIcon
          className="text-primary"
          icon={faTriangleExclamation}
          size="2xl"
        />
        <h5 className="text-primary font-semibold text-lg lg:text-xl ml-3">
          RAB কর্তৃক প্রদত্ত পরামর্শ
        </h5>
      </div>

      <div>
        {description.map((value, index) => (
          <p className="mb-5 line-clamp-4 text-bodyText text-sm" key={index}>
            {value}
          </p>
        ))}
      </div>
    </ContentContainer>
  );
}
