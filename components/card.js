import React from "react";
import Link from "next/link";
import Image from "./image";

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[slug]">
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <Image image={article.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <span id="tag" className="tag">
              {article.tag.name}
            </span>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
            <p className="article-date">
              {article.created_at
                .substring(0, 10)
                .split("-")
                .reverse()
                .join(".")}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
