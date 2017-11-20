module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || (process.env.NODE_ENV === 'production' ? 8080 : 3002),
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || 3030,
  app: {
    title: 'react redux book',
    description: 'react redux book example',
    head: {
      titleTemplate: 'react redux book:%s',
      meta: [
        {
          name: 'description',
          content: 'react redux book example',
        },
        {
          charset: 'utf-8',
        },
      ],
    },
  },
};
