exports.createPages = ({
  graphql,
  actions
}) => {
  const { createRedirect } = actions;
    createRedirect({
      fromPath: '/2017/08/06/how-i-got-a-job/',
      toPath: '/blog/mypost-new',
      isPermanent: true
    });
}
