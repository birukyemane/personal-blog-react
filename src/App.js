import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import blogHeader from './assets/blogHeader.jpg';

import './App.css';

class App extends Component {

  state = {
    posts : [{title:'My day in itegrify',
              category: 'Work',
              content: 'I arrived at integrify at 9:00 AM and started code review with my classmates'},
              {title:'Fun at the beach',
              category: 'Recration',
              content: 'I was relaxing by the beach side with my girl friend. We sat by the beach...'},
              {title:'Running in the forest',
              category: 'Sport',
              content: 'I stared my daily exercise at 6:00 PM. I walked to the near by forest and started..'}
            ]
  }


  add = (title, category, content) => {
    let posts = [...this.state.posts];
    posts.push({title, category, content});
    this.setState({posts:posts});
  }

  render() {
    return (
      <BrowserRouter>         
        <div className="appContainer">  
          <header>
            <img src={blogHeader} alt="biruks" className="headerImg"/>
            <h1>Biruk's Blog</h1>
            <ul className="blackBackground">
              <li><NavLink to='#' className="whiteFont">About Me</NavLink></li>
              <li><NavLink to='#' className="whiteFont">posts</NavLink></li>            
            </ul>
          </header>               
          <Switch>
            <Route exact path='/'  render={(props) => <Posts {...props} posts = {this.state.posts} />}/>
            <Route exact path='/posts/newpost' render={(props) => <AddPost {...props} AddPost= {this.add} />}/>
          </Switch>
        </div>
      </BrowserRouter>     
    );
  }
}

export default App;
