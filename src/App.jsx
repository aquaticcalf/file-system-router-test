import { BrowserRouter as Router } from 'react-router-dom'
import { FileSystemRouter } from 'file-system-router'

// vite users:
const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })

// webpack users:
// const pages = require.context('./pages', true, /\.jsx$/)

export default function App() {
  return (
    <Router>
      <FileSystemRouter pages={pages} />
    </Router>
  )
}