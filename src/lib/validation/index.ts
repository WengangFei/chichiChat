import * as z from 'zod';



//Define the shape of form using a Zod schema. 

// sign up form schema infer as a static type of sign up form data.
export const signUpValidation = z.object({
    name:z.string().min(2,{message:'Too short.'}),
    username: z.string().min(2, {
      message: "Username must have at least 2 characters.",
    }),
    email:z.string().email(),
    password: z.string().min(8,{
      message: 'Password must be at least 8 characters.'
    })
  })


