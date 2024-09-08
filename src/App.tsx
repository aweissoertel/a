import './App.css'
import Dashboard from './components/dashboard-07'
import { ThemeProvider } from './components/theme-provider'
import { TooltipProvider } from './components/ui/tooltip'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Dashboard />
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
