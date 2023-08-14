import React from 'react';
import { createRoot } from 'react-dom/client';
import { useEffect } from "react"
import './styles/global.css';
import App from './routes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'tw-elements';
import { Provider } from 'react-redux';
import store from "./context/store"
import { AddLibrary } from './utils';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
const getTitleFromUrl = () => {
  let pathname = window.location.pathname.split("/")
  pathname = pathname[pathname.length - 1]
  let current_route = ""
  pathname.split("-").map(item => {
    current_route += item[0].toUpperCase() + item.substring(1) + " "
  })
  return current_route.trim();
}
function AppWithCallbackAfterRender() {
  return (
    <>
      {/* <Helmet>
        <title>{getTitleFromUrl()}</title>
      </Helmet> */}
      <App tab="home" />
    </>
  )
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {AddLibrary('https://kit.fontawesome.com/46adaedcbb.js')}
    <BrowserRouter>
      <Provider store={store}>
        <AppWithCallbackAfterRender />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
