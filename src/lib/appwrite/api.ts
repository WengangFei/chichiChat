import { INewUser } from "@/types";
import { ID } from 'appwrite';
import { account, appwriteConfig, avatars, database } from "./config";

//define the user type in typescript
export async function createNewUser(user: INewUser){
//user = {
    //name: 'zhong', 
    //username: 'zhongli', 
    //email: 'wengangfei@gmail.com', 
    //password: 'boston16883'
//}
    try{
        const newUserAccount = await account.create(
//the order of parameters in the `account.create` call matters
//The correct order should be: id - email - password - name 
            ID.unique(),
            user.email,
            user.password,
            user.username,
        )
// if user created success, add user to the DB
        if(!newUserAccount) throw Error;
        //
        const avatarURL = avatars.getInitials(user.name);
        console.log(avatarURL)

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

//save user to DB
export async function saveUserToDB(user: {
    accountID: string;
    name: string;
    email: string;
    username?: string;
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
