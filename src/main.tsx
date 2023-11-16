import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './app/routes/Router.tsx'
import { LangProvider } from './app/redux/language/lang-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangProvider>
        <RouterProvider router={AppRouter} />
    </LangProvider>
  </React.StrictMode>,
)
