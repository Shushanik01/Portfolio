import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { APP_ROUTES } from './consts'
import { getAppRoutes } from './utils'
import styles from './style.module.css';
import { Chat } from '../components/chatBot';

function App() {
  const pages = useRoutes(getAppRoutes())

  return (
    <div className={styles.appShell}>
      <MainLayout>{pages ?? <Navigate to={APP_ROUTES.home} replace />}</MainLayout>
      <Chat/>
    </div>
  )
}

export default App
