const { GraphQLServer } = require('graphql-yoga');
// Acento que respeta espacios y salto de linea.
// tipo Query
// nombre(parametros): resultadoEnTipoDeDato 
const typeDefs = `

    type Query{
        hello(name:String): String!
    }

`

const resolvers = {
    Query:{
        hello:(root, params, context, info) => `Hola ${params.name}` //interpolación back tips //acento grave
    }
}

const server  = new GraphQLServer({typeDefs, resolvers});