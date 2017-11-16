export default app => {
  app.get('logout', (req, res) => {
    let session = req.session;

    session.destory(() => {
      session = null;
    });
    res.json(null);
  });
};
