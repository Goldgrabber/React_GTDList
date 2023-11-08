import React from 'react';
import listSvg from './assets/img/list.svg';


function App() {
  return <div className='todo'>
    <div className="todo__sidebar">
        <div className="todo__list">
          <li>
            <i>
              <img src={listSvg} alt="List icon"/>
            </i>
            <span> Все задачи </span>
          </li>
        </div>
    </div>
    <div className="todo__TASKS">

    </div>
  

  </div>;
}

export default App;
