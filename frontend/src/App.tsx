
import './App.css'
// import Header from './components/Header';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { useTranslation } from 'react-i18next';


function App() {
  // const { t } = useTranslation(['about']);
  const { t } = useTranslation(['about', 'common']); //about is default namespace for this page 
  // const { t } = useTranslation(['about', 'common']);
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Header /> */}
      {
        t("key")
        // t('key')
      }
    </div>
  )
}

export default App
