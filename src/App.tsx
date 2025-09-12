import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Users from './pages/Users.tsx';
import Settings from './pages/Settings.tsx';

function App() {
  return (
    <BrowserRouter>
     {/* Essa parte a cor de fundo e até onde desce o flexbox,é como se fosse um body */}
      <div className='flex min-h-screen bg-green-400 text-foreground'>
        {/* Aqui, é dentro do flexbox, onde será editado o tamanho da flexbox e personalizado*/}
        <nav className='w-30 p-3 bg-white border-r border-black'>
          {/* Espaçamento verfical do código*/}
          <ul className='space-y-1.5'>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/users">Usuários</Link>
            </li>
            <li>
              <Link to="/settings">Configuração</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/setting" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;