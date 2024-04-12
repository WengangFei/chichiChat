import { Outlet, Navigate } from 'react-router-dom';

function AuthLayout() {

  const isAuthenticated = true;

  return (

    <div>
      { isAuthenticated && (
        <div>
          You are signed in already, this page is unavailable!
        </div>
      )}
      Auth lay out page

      <div>
      { isAuthenticated ? <Navigate to='/' /> : <Outlet />   }
      
      </div>
      
    </div>
  )
}

export default AuthLayout
