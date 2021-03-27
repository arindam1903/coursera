import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import HomeContainer from './components/Home-container/HomeContainer';
import Company from './components/company/Company';
import Goals from './components/Goals/Goals';
import Learner from './components/learner/Learner';
function App() {
  return (
  <div id='screen'>
<Header/>
<HomeContainer/>
<Company/>
<Goals/>
<Learner/>
  </div>
  );
}

export default App;
