import './App.css';
import SignIn from './components/signIn';
import Patients  from './components/Patients';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>SV Hospital</h1>
       <br />
       <SignIn />
      <Patients />
      </header>
      <div>
        
      </div>
    </div>
  );
}

export default App;
