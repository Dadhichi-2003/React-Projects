import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route ,RouterProvider} from 'react-router-dom';
import Cards from './components/Card';
import Details from './components/Details';
import Des from './components/Des';
import { DetailsProvider } from './components/DetailsProvider';



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='' element={<Des/>}/>
      <Route path='/Details' element={<Details/>}/>
      <Route path='/card' element={<Cards/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DetailsProvider>
   <RouterProvider router={router}/>
   </DetailsProvider>
   
  </React.StrictMode>
);


reportWebVitals();
