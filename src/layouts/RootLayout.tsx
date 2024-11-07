import { Outlet, ScrollRestoration } from "react-router-dom"

const RootLayout = (): JSX.Element => {
 return (
  <div>
   <ScrollRestoration />
   <Outlet />
  </div>
 )
}

export default RootLayout
