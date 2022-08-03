import "./App.css"
import signup from './assets/signup.webp';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid" src={signup} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;