import { Suspense, lazy } from "react";
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const ManageTodos = lazy(() => import("./pages/ManageTodos"));
const Navigation = lazy(() => import("./components/Navigation"));

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

const lazyComponent = () => <div>Loading...!</div>

function App() {
  return <Suspense fallback={lazyComponent()}>
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation />}>
          <Route exact path='/' element={<ManageTodos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
}
export default App;
