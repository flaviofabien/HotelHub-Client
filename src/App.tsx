import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Anonyme/Home'
import About from './pages/Anonyme/About'
import Contact from './pages/Anonyme/Contact'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Admin/Dashboard'
import Rooms from './pages/Admin/Rooms'
import Booking from './pages/Admin/Booking'
import Users from "./pages/Admin/Users"
import AddRoom from './pages/Admin/Rooms/AddRoom'
import SuccessMessge from "./Component/ui/success/SuccessMessge"
import EditRoom from "./pages/Admin/Rooms/EditRoom"
import AddBooks from "./pages/Admin/Books/AddBooks"
import AddUsers from "./pages/Admin/Users/AddUsers"
import PrivateRoute from "./Component/privateRoute/PrivateRoute"
import PrivateRouteAdmin from "./Component/privateRoute/PrivateRouteAuth"
import { useContextGlobal } from "./Component/globalState/useContextGlobal"
import { useEffect } from "react"
import NotFound from "./Component/ui/ErrorPage/NotFount"

const router = createBrowserRouter([
  // Page clients
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  },

  // Page Auth
  {
     element: <PrivateRouteAdmin />,
     children : [
       {
         path:"/register",
         element:<Register />
       },
         {
         path:"/login",
         element:<Login />
       },
     ]
  },
  // Page Admin
  {
     element: <PrivateRoute />,
     children : [
       {
         path:"/admin/dashboard",
         element:<Dashboard />
       },
             // -------roms
       {
         path:"/admin/rooms",
         element:<Rooms />
       },
       {
         path:"/admin/rooms/add",
         element:<AddRoom />
       },
       {
         path:"/admin/rooms/edit/:id",
         element:<EditRoom />
       },
     
             // -------Book
       {
         path:"/admin/books",
         element:<Booking />
       },
       {
         path:"/admin/books/add/:id",
         element:<AddBooks />
       },
             // -------User
       {
         path:"/admin/users",
         element:<Users />
       },
       {
         path:"/admin/users/add",
         element:<AddUsers />
       }
     ]
  },
   {
    path: "*",
    element: <NotFound />,
  },
])

function App() {
  const {alert,setAlert} = useContextGlobal()

  useEffect(() => {
    if (!alert) return;

    const timer = setTimeout(() => {
        setAlert({status : false , description : "" , title : ""});
    }, 3000);

    return () => clearTimeout(timer );
    }, [alert, setAlert]);

  return (
    <section>
      {
          alert.status && 
          <div className="fixed top-0 right-0">
              <SuccessMessge description={alert.description} title={alert.title} />
          </div>
      }   
      <RouterProvider router={router} />
    </section>
  )
}

export default App

