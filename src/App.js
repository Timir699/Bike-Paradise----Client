import './App.css';
import Components from './Components/Components';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Components />
        </AuthProvider>
    </div>
  );
}

export default App;
