import { Client } from "faunadb";

export interface Env {}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const client = new Client({
      secret: "",
      domain: "",
      scheme: "https",
    });
    console.log(client);
    return new Response("Hello World!");
  },
};
