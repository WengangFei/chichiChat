import {
    useQuery,//fetching the data
    useMutation, // modify the data
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query';
import { createNewUser } from '../appwrite/api';
import { INewUser } from '@/types';


//initialized new mutation function so that react query knows when create a new user.
export const useCreateUserAccount = ()=>{// use it in sign up form.
    return useMutation({
        mutationFn:(user:INewUser)=> createNewUser(user)
    })
}

//
export const useSignInAccount = ()=>{// use it in sign up form.
    return useMutation({
        mutationFn:(user:INewUser)=> createNewUser(user)
    })
}

