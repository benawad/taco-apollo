const typeDefinitions = `
type Taco {
  _id: String
  meat: String
  cheese: String
  salsa: String
}

type RootQuery {
  allTacos: [Taco]
  tacos(meat: String!): [Taco]
  taco(_id: String!): Taco
}

type RootMutation {
  createTaco (
    meat: String!
    cheese: String
    salsa: String
  ): Taco
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefinitions;
