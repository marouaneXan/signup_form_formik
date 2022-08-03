import "./App.css"
import signup from './assets/signup.webp';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5 p-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto p-5">
          <img className="img-fluid w-100" src={signup} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;