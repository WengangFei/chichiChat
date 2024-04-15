import { INewUser } from "@/types";
import { ID } from 'appwrite';
import { account } from "./config";

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
        return newUserAccount;
    }catch(error){
        console.log(error);
        return error
    }
}