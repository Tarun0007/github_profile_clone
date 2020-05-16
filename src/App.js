import React from 'react';
import './App.css';
import UserDetails from './components/userDetails';
import RepoLists from  './components/repo-lists';

function App() {
  return (
    <div className="gitRepo">
      <div className="left-panel">
        <UserDetails />
      </div>
      <div className="right-panel">
        <RepoLists />
      </div>
    </div>
  );
}

export default App;
