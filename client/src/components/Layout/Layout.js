import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
          {children}
          </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps={
  title:"Shop @Radiant-Ornate Now",
  description:"mern-stack-project", //change description
  keywords:"mern,react,node,mongodb",
  author:"team2931",
};
//If want to more SEO friendly have to add this in every pages

export default Layout;