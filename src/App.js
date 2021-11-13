import './App.css';
import Components from './Components/Components';
import AuthProvider from './Context/AuthProvider';
import DisplayProvider from './Context/DisplayProvider';
import ReviewProvider from './Context/ReviewProvider';

function App() {
  return (
    <div className="App">

      <ReviewProvider>
        <DisplayProvider>
          <AuthProvider>
            <Components />
          </AuthProvider>
        </DisplayProvider>
      </ReviewProvider>
    </div>
  );
}

export default App;
