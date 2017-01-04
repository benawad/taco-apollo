'use strict';

const hooks = require('./hooks');
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import Resolvers from './resolvers';
import Schema from './schema';

module.exports = function () {
  const app = this;

  const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(app)
  });

  app.use('/graphql', apolloExpress((req) => {
    return {
      schema: executableSchema
    }
  }))

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));


}
