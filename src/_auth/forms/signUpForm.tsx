"use client"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import Loader from "@/components/shared/loader";
import { Link } from 'react-router-dom';
import { signUpValidation } from "@/lib/validation";
import { useToast } from "@/components/ui/use-toast";
import { useCreateUserAccount } from "@/lib/react-query/queriesAndMutations";




function SignUpForm() {

  // loader is loading when submit the form
  // const[isLoading,setIsLoading] = useState(false);
  const { toast } = useToast();
  console.log(useCreateUserAccount())
  const { mutateAsync: createUserAccount, isLoading: isCreatingUser } = useCreateUserAccount();

  // 1. Define form.
  // Zod schemas are TypeScript types. This means can use them 
  // to infer the type of sign up form data.
  type signUpFormType = z.infer<typeof signUpValidation>;
  const form = useForm<signUpFormType>({
    //resolver is to connect zod to the form data validation.
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      name:"",
      username: "",
      email:"",
      password:"",
    },
  })



  // 2. Define a submit handler.
  // async function to create a user, it takes some time.
  async function onSubmit(values: z.infer<typeof signUpValidation>) {
    // Do something with the form values.
    // create a user account 
    const newUser = await createUserAccount(values);
    // useToast to prompt if sign up failed.
    if(!newUser){
      return toast({
        title:'Sign Up failed. Please try again.'
      })
    }
    console.log(newUser);//data base form
    console.log(values)//user sign up form 
  }



  return (
 
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src={'/assets/images/signUpLogo.png'} alt='sign up logo'
        height='100' width='180' className="ml-10"
        />
        <h2 className="font-bold text-xl my-3">ChiChiChat Account</h2>
   
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full mt-4">
       
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input placeholder="put your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username:</FormLabel>
                <FormControl>
                  <Input placeholder="put your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Email:</FormLabel>
                <FormControl>
                  <Input placeholder="put your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input placeholder="put your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-5 bg-purple font-bold">
            { isCreatingUser ? <Loader /> : 'Sign Up' }
          </Button>
          <p className="text-xs">Already have a account? 
            <Link to='/sign-in' className="text-purple font-bold mx-3 underline text-sm">
              Log In
            </Link>
          </p>
        </form>

      </div>
  </Form>
 
   
  )
}


export default SignUpForm;