import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

 //Vite exposes env variables on the special import.meta.env object. 
export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    projectURL: import.meta.env.VITE_APPWRITE_URL,
}


export const client = new Client();
client
    .setEndpoint(appwriteConfig.projectURL)
    .setProject(appwriteConfig.projectId); 
export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);