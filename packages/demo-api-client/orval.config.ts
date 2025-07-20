export default {
  sceneApi: {
    input: {
      target: '../demo-api/swagger.json',
    },
    output: {
      mode: 'tags-split',
      target: 'src/generated/',
      schemas: 'src/schemas/',
      client: 'react-query',
    },
  },
};
