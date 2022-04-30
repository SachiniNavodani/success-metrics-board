import './index.css';
import Home from './components/Home'

export default function App() {
  
  return (
    <div className="App">
      <div className="header-wrapper" style={{ textAlign: "center" }}>
        <h1>Success Metrics</h1>
        <h2>{new Date().getFullYear()}</h2>
      </div>
      <Home />
    </div>
  );
}