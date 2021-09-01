import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <button className="btn btn-success"> Click Me</button>
    </div>
  );
}

export default App;
