import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      root lay out page
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
