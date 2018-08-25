import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Content from './content'
import SessionOne from './session_one'
import SessionTwo from './session_two'
import SessionThree from './session_three'
import Timer from './timer'
import TodoStore from './todoStore'
import './index.css'
import Test from './test'
const supportsHistory = 'pushState' in window.history

const Navigator = () => (
  <Router
    forceRefresh={!supportsHistory}
  >
    <div>
      <ul className='navigator'>
        <li>
          <Link to='/'>内容</Link>
        </li>
        <li>
          <Link to='/session1'>示例一</Link>
        </li>
        <li>
          <Link to='/session2'>示例二</Link>
        </li>
        <li>
          <Link to='/session3'>示例三</Link>
        </li>
      </ul>
      <div className='content-area'>
        {/* <Redirect from='/*' to='/' /> */}
        <Route exact path='/' component={Content} />
        <Route path='/session1' component={() => <SessionOne todoStore={new TodoStore()} />} />
        <Route path='/session2' component={SessionTwo} />
        <Route path='/session3' component={SessionThree} />
        <Route path='/timer' component={Timer} />
        <Route path='/test' component={Test} />
      </div>
    </div>
  </Router>
)

ReactDOM.render(
  <Navigator />,
  document.getElementById('root')
)
