
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';


function Root(){
  
  return (<div>
    <Clock />
  </div>);
}

document.addEventListener('DOMContentLoaded', ()=> {

  const reactRoot = document.getElementById('react-root');

  ReactDOM.render(<Root />, reactRoot);


});
