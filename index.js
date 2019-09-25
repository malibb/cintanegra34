const { GraphQLServer } = require('graphql-yoga');
const PORT = 5000;
// Acento que respeta espacios y salto de linea.
// tipo Query
// nombre(parametros): resultadoEnTipoDeDato 
const typeDefs = `

    type Query{
        hello(name:String): String!
        getUsers: [User!]
    }

    type Mutation{
        createUser(name:String!, age:Int!):User
    }

    type User{
        id:Int!
        name:String!
        age:Int!
    }

`
const users = [];
const resolvers = {
    Query:{
        hello:(root, params, context, info) => `Hola ${params.name}`, //interpolación back tips //acento grave
        getUsers:(root, params, context, info) => users
    },
    Mutation:{
        createUser:(root, params, context, info) => {
            const user = {
                id: users.length + 1,
                name: params.name,
                age: params.age
            };
            users.push(user);
            return user;
        }
    }
}

const server  = new GraphQLServer({typeDefs, resolvers}); // schema graphql

server.start({port: PORT },() => console.log(`Works in port ${PORT}`));