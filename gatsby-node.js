

exports.createPages = async ({ actions, graphql}) => {
  
    const { createRedirect } = actions;
    createRedirect({
      fromPath: '/old-url',
      toPath: '/blog/new-url',
      isPermanent: true
    });
}