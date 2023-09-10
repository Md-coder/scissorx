import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { IRoute, pageRoutes } from './routes';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          {pageRoutes.map((route: IRoute, key) => {
            return <Route path={route.path} key={key} element={<route.component />}></Route>;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
