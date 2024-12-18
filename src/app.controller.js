const bootstrap = (app, express) => {
  app.use(express.json());

  app.get('/', (req, res, next) => {
    return res
      .status(200)
      .json({ message: 'Welcome in node.js project powered by express and ES6' });
  });

  app.all('*', (req, res, next) => {
    return res.status(404).json({ message: 'In-valid routing' });
  });
};

export default bootstrap;
