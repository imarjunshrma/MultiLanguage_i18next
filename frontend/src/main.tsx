import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n.ts'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorBoundary } from 'react-error-boundary'
const fallBackRender = ({ error }: { error: string }) => {
  console.log(error)
  return <div>some error</div>
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={fallBackRender} >
      <Suspense fallback="loading...">
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
)
