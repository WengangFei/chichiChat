import { INewUser } from "@/types";
import { ID } from 'appwrite';
import { account, appwriteConfig, avatars, database } from "./config";

//define the user type in typescript
export async function createNewUser(user: INewUser){
    try{
        const newUserAccount = await account.create(
//the order of parameters in the `account.create` call matters
//The correct order should be: id - email - password - name 
            ID.unique(),
            user.email,
            user.password,
            user.username,
        )

        if(!newUserAccount) throw Error;
        const avatarURL = avatars.getInitials(user.username);

        const newUser = await saveUserToDB({
            accountID: newUserAccount.$id,
            name: newUserAccount.name,
            email: newUserAccount.email,
            username: user.username,
            imageURL: avatarURL,
        })

        return newUserAccount;
    }catch(error){ 
        console.log(error);
        return error
    }
}


export async function saveUserToDB(user: {
    accountID: string;
    name: string;
    email: string;
    username: string;
    imageURL: URL;
}){
    try{
        const newUser = await database.createDocument(
            appwriteConfig.databaseID,
            appwriteConfig.userCollectionID,
            ID.unique(),
            user,
        )
        return newUser;
    }catch(error){
        console.log(error)
    }
}

//create sign in account function utilize in appwrite react query
export async function signInAccount(user:{email:string,password:string}){
    try{
        const session = await account.createEmailPasswordSession(user.email,user.password);
        return session;
    }
    catch(error){
        console.log(error)
    }
}