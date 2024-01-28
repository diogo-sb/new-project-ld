import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import Header from '@/components/header/header'
import Home from './pages/home/home'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header></Header>
      <main>
        <RouterProvider router={router} />
      </main>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
