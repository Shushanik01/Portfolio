import { ConfigProvider, theme as antdTheme } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import { useTheme } from './contexts/ThemeProvider/useTheme'

function ThemedApp() {
  const { theme } = useTheme()

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 10,
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default ThemedApp
