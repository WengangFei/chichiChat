import { Outlet, Navigate } from 'react-router-dom';

function AuthLayout() {

  const isAuthenticated = false;
  
  return (

    <>
      { isAuthenticated && (
        <div>
          You are signed in already, this page is unavailable!
        </div>
      )}
      Auth lay out page

      
      { isAuthenticated ? <Navigate to='/' /> : (
        <>
          <section className='flex flex-1 justify-center items-center flex-col py-10'>
            <Outlet />
          </section>
          
          <img src={'/assets/images/sign-up.jpeg'} alt='sign-up logo'
          className='w-3/5 h-screen hidden md:block'
          />
        </>
      )}
      
      </>
   
  )
}

export default AuthLayout
