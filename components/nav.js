import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>2manydevs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              if (category.articles.length > 0) {
                return (
                  <li key={category.id}>
                    <Link
                      as={`/category/${category.slug}`}
                      href="/category/[slug]"
                    >
                      <a className="uk-link-reset">{category.name}</a>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
