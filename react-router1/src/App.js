import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const years =  [
  { name: "1989年（平成元年）" },
  { name: "1990年（平成2）" },
  { name: "1991年（平成3）" },
  { name: "1992年（平成4）" },
  { name: "1993年（平成5）" },
  { name: "1994年（平成6）" },
  { name: "1995年（平成7）" },
  { name: "1996年（平成8）" },
  { name: "1997年（平成9）" },
  { name: "1998年（平成10）" },
  { name: "1999年（平成11）" },
  { name: "2000年（平成12）" },
];

const months = []

for(let i = 1; i < 13; i++){
months.push({name: i})
}

const days = []

for(let i = 1; i < 32; i++){
days.push({name: i})
}

class App extends Component {
  render() {
    return (    
       <Router>
       <Link to ="./Page1">Page1</Link>
       <Link to ="./Page2">Page2</Link>
       <Link to ="./Page3">Page3</Link>
        <div>
          <Route component={Page1}/>
          <Route path='/Page2' component={Page2} />
          <Route path='/Page3' component={Page3} />
        </div>
      </Router>
    );
  }
}

export default App;
