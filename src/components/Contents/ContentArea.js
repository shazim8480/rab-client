import React from "react";
import MainContent from "./MainContent";
import Blog from "./Blog";
import PressRelease from "./PressRelease";

import mainContent from "../../data/home/mainContent";
import blog from "../../data/home/blog";
import pressRelease from "../../data/home/pressRelease";

export default function ContentArea() {
  return (
    <main className="space-y-12">
      <section className="grid lg:grid-cols-2 items-center">
        {mainContent.map((mainContent, idx) => (
          <MainContent key={idx} mainContent={mainContent} />
        ))}
      </section>
      <section className="grid lg:grid-cols-2 items-start">
        <article>
          {blog.map((blog, idx) => (
            <Blog key={idx} blog={blog} />
          ))}
        </article>
        <article>
          <PressRelease pressRelease={pressRelease} />
        </article>
      </section>
    </main>
  );
}
