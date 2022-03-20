import React from "react";
import ContentContainer from "./ContentContainer";

export default function Blog({ blog }) {
  const { description, title } = blog;

  return (
    <ContentContainer>
      <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
      {/* <p className="text-gray-700 text-base mb-4 line-clamp-5">
        {blog.description}
      </p> */}
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
