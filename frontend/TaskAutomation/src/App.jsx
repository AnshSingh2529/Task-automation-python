import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

function Layout({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1 className="logo">TaskAutomation</h1>
        <nav className="nav">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/workflows">Workflows</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="grid">
      <div className="card">
        <h2>Active Tasks</h2>
        <p>12</p>
      </div>
      <div className="card">
        <h2>Running Automations</h2>
        <p>4</p>
      </div>
      <div className="card error">
        <h2>Failures (24h)</h2>
        <p>1</p>
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <div>
      <header className="page-header">
        <h2>Tasks</h2>
        <button className="primary">New Task</button>
      </header>
      <div className="card">
        <h3>Daily Report Generator</h3>
        <span className="muted">Runs every day at 9 AM</span>
      </div>
    </div>
  );
}

function Workflows() {
  return (
    <div className="card">
      <h2>Workflows</h2>
      <p>Workflow builder placeholder</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="card">
      <h2>Settings</h2>
      <p>API keys and preferences</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}
