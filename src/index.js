import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Content from './content'
import SessionOne from './session_one'
import SessionTwo from './session_two'
import Timer from './timer'
import TodoStore from './todoStore'
import './index.css'
import Test from './test'
import ReduxApp from './redux-app'
import MobXApp from './mobx-app'
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
          <Link to='/reduxapp'>Redux Version</Link>
        </li>
        <li>
          <Link to='/mobxapp'>MobX Version</Link>
        </li>
      </ul>
      <div className='content-area'>
        {/* <Redirect from='/*' to='/' /> */}
        <Route exact path='/' component={Content} />
        <Route path='/session1' component={() => <SessionOne todoStore={new TodoStore()} />} />
        <Route path='/session2' component={SessionTwo} />
        <Route path='/timer' component={Timer} />
        <Route path='/test' component={Test} />
        <Route path='/reduxapp' component={ReduxApp} />
        <Route path='/mobxapp' component={MobXApp} />
      </div>
    </div>
  </Router>
)

ReactDOM.render(
  <Navigator />,
  document.getElementById('root')
)
