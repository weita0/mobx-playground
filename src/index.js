import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Content from './content'
import SessionOne from './session_one'
import SessionTwo from './session_two'
import SessionThree from './session_three'
import Timer from './timer'
import './index.css'
const supportsHistory = 'pushState' in window.history

const Navigator = ({props}) => (
  <Router
    forceRefresh={!supportsHistory}
  >
    <div>
      <ul className='navigator'>
        <li>
          <Link to='/'>Content</Link>
        </li>
        <li>
          <Link to='/session1'>Session 1</Link>
        </li>
        <li>
          <Link to='/session2'>Session 2</Link>
        </li>
        <li>
          <Link to='/session3'>Session 3</Link>
        </li>
      </ul>
      <div className='content-area'>
        {/* <Redirect from='/*' to='/' /> */}
        <Route exact path='/' component={Content} />
        <Route path='/session1' component={SessionOne} />
        <Route path='/session2' component={SessionTwo} />
        <Route path='/session3' component={SessionThree} />
        <Route path='/timer' component={Timer} />
      </div>
    </div>
  </Router>
)

ReactDOM.render(
  <Navigator />,
  document.getElementById('root')
)
