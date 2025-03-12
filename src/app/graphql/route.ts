import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";
import { NextRequest } from "next/server";

const schema = await buildSchema({
  resolvers: [MeResolver],
});

const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
});

interface GraphQLContext {
  req: NextRequest;
}

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req: NextRequest): Promise<GraphQLContext> => ({ req }),
});

// Export the handler with proper Next.js App Router types
export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
