import AuthLayout from './_auth/AuthLayout';
import SignInForm from './_auth/forms/signInForm';
import SignUpForm from './_auth/forms/signUpForm';
import RootLayout from './_root/RootLayout';
import { Home } from './_root/pages';
import './global.css';
import { Routes , Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";


function App() {

  return (
    <main className='flex h-screen'>
      <Routes>
        <Route element={ <AuthLayout />}>
          {/* public routes */}
          <Route path='/sign-in' element={ <SignInForm />}/>
          <Route path='/sign-up' element={ <SignUpForm />}/>
        </Route>
       
        <Route element={ <RootLayout />}>
          {/* private routes */}
          <Route index element={ <Home />}/>
        </Route>
      </Routes> 
      {/* toast to prompt sign up result */}
      <Toaster />
    </main>
  )
}

export default App
