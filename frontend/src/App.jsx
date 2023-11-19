import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import DoctorList from './components/DoctorList';
{/*  <Router>
      <div>
        <Switch>
          <Route path="/" exact component={CategoryList} />
          <Route path="/doctors/:category" component={DoctorList} />
        </Switch>
      </div>
    </Router>*/}
    const router=createBrowserRouter([
      {
        path:'/',
        element:<CategoryList/>
      },
      {
        path:'/doctors/:category',
        element:<DoctorList/>
      }
    ])
const App = () => {
  return (
   <RouterProvider router={router}/>
  )
};

export default App;

