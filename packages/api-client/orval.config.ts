export default {
  sceneApi: {
    input: {
      target: 'http://localhost:3000/api/docs/',
    },
    output: {
      mode: 'tags-split',
      target: 'packages/api-client/src/generated/',
      schemas: 'packages/api-client/src/schemas/',
      client: 'react-query',
    },
  },
};
