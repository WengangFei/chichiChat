import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

 //Vite exposes env variables on the special import.meta.env object. 
export const appwriteConfig = {
    projectID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    projectURL: import.meta.env.VITE_APPWRITE_URL,
    databaseID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageID: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionID: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    savesCollectionID: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
    postCollectionID: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
}   


export const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65f06f878a045139363a'); 
export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);