import env from "../../env";
// Init your Web SDK
import { Avatars, Client, Databases, Storage, Users } from "node-appwrite";

const client = new Client();

client
  .setEndpoint(env.appwrite.endpoint) // Your Appwrite Endpoint
  .setProject(env.appwrite.projectId) // Your project ID
  .setKey(env.appwrite.apiKey); // Your secret API key
const database = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const users = new Users(client);

export { client, database, users, avatars, storage };
