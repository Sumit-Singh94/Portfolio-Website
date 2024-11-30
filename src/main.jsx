import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Github from './Components/Github/Github.jsx'
import Contact from './Components/Contact/Contact.jsx'


const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[{
            path:"",
            element:<Home/>
        },
        {
            path:'about',
            element:<About/>
        },
        {
            path:'Github',
            element:<Github/>
        },
        {
            path:'Contact',
            element:<Contact/>
        }
        ]
    }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>    
)
