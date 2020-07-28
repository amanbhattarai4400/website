exports.createPages = async ({ actions, graphql}) => {
  const { createRedirect } = actions;
  const redirects = [
    {
  fromPath: '/2014/04/7-things-to-do-after-publishing-new-blog-post.html',
  toPath: '/blog/seo-strategies-after-publishing-contents/',
  isPermanent: true
},
{
  fromPath: '/2014/04/7-tips-to-improve-your-writing.html',
  toPath: '/blog/improve-writing-skills/',
  isPermanent: true
},
{
  fromPath: '/2014/04/8-blogging-habits-of-successful-bloggers.html',
  toPath: '/blog/pro-blogging-habits/',
  isPermanent: true
},
{
  fromPath: '/2014/02/add-author-box-below-posts-in-blogger.html',
  toPath: '/blog/author-box-for-blogger/',
  isPermanent: true
},
{
  fromPath: '/2019/09/add-beautiful-html-sitemap-page-in-blogger.html',
  toPath: '/blog/html-sitemap-page-blogger/',
  isPermanent: true
},
{
  fromPath: '/2015/03/add-blogger-contact-form-to-static-pages.html',
  toPath: '/blog/simple-blogger-contact-form',
  isPermanent: true
},
{
  fromPath: '/2015/08/add-contact-form-to-blogger-pages.html',
  toPath: '/blog/premium-contact-page-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/10/simple-email-subscription-box-for-blogger.html',
  toPath: '/blog/elegant-email-subscription-box-blogger',
  isPermanent: true
},
{
  fromPath: '/2020/07/how-to-create-beautiful-animated-hero.html',
  toPath: '/blog/blogger-footer-animation',
  isPermanent: true
},
];

redirects.forEach(redirect => createRedirect(redirect));
}