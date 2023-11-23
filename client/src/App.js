
import './App.css';
// import { BrowserRouter,Routes } from "react-router-dom";
import UserForm from './components/UserForm';

import "bootstrap/dist/css/bootstrap.css"; // bootstrap
import "./index.css";

function App() {
  return (
    <div className="App">
     <UserForm />
      {/* <BrowserRouter basename='/'>    
        <Routes>
          <UserForm />
        </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;














































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
