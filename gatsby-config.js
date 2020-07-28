require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "TwistBlogg",
    description: "TwistBlogg is an information resource site for Bloggers and Geeks.Here we focus on SEO, Blogging, Blogging Widgets, Tips and Tricks related to Social Media and Web Apps.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: `@reflexjs/gatsby-theme-post`,
      options: {
        contentPath: "content/posts",
        basePath: "/blog",
        postsPerPage: 6,
        pageQuery: null,
        slugResolver: null,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TwistBlogg`,
        short_name: `TwistBlogg`,
        start_url: `/`,
        background_color: `#191924`,
        theme_color: `#0066FF`,
        display: `standalone`,
        icon: `content/images/favicon.webp`,
        icons: [
          {
            src: `maskable_icon.webp`,
            sizes: `196x196`,
            type: `image/webp`,
            purpose: `maskable`,
          },
        ],
      },
    },
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        debug: true,
        global: {
          title: "TwistBlogg - Get Premium Blogger Tutorials",
          description: "TwistBlogg is an information resource site for Bloggers and Geeks.Here we focus on SEO, Blogging, Blogging Widgets, Tips and Tricks related to Social Media and Web Apps.",
          image: "social media.webp",
        },
        types: [
          `Page`,
          `Post`,
          {
            type: `PostTag`,
            defaults: {
              title: (tag) => {tag.name},
            },
          },
        ],
        paths: [
          {
            pathname: `/blog{,/**}`,
            defaults: {
              title: `Blog | TwistBlogg - Get Premium Blogger Tutorials`,
            },
          },
        ],
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog`],
      },
    },
   "gatsby-plugin-netlify"
  ],
}
