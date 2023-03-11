import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { SkillsProvider } from './context/SkillsProvider'
import { ProjectsProvider } from './context/ProjectsProvider'
import { AuthProvider } from './context/AuthProvider'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SkillsProvider>
          <ProjectsProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </ProjectsProvider>
        </SkillsProvider>
      </AuthProvider>
    </BrowserRouter>
    
      
    
  )
}

export default App
