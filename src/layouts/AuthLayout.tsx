import { Outlet, ScrollRestoration } from "react-router-dom"

const AuthLayout = (): JSX.Element => {
 return (
  <div>
   <ScrollRestoration />
   <Outlet />
  </div>
 )
}

export default AuthLayout
