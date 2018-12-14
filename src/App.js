import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import PostDetail from './components/PostDetail';
import blogHeader from './assets/blogHeader.jpg';

import './App.css';

class App extends Component {

  state = {
    posts : [{id:1,
              title:'My day in itegrify',
              category: 'Work',
              content: 'I arrived at integrify at 9:00 AM and started code review with my classmates'},
              {id:2,
              title:'Fun at the beach',
              category: 'Recration',
              content: 'I was relaxing by the beach side with my girl friend. We sat by the beach...'},
              {id:3,
              title:'Running in the forest',
              category: 'Sport',
              content: 'I stared my daily exercise at 6:00 PM. I walked to the near by forest and started..'}
            ],
    nextID : 4
  }

  add = (title, category, content) => {
    let id = this.state.nextID;
    let posts = [...this.state.posts];
    posts.push({id,title, category, content});
    this.setState({posts:posts, nextID:id++});
  }

  getPost = (id)=>{
    console.log(id);
    let post = this.state.posts.filter(post =>{
      return post.id == id;
    });
    console.log(post)
    return post[0];
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
              <li><NavLink to='/' className="whiteFont">posts</NavLink></li>            
            </ul>
          </header>               
          <Switch>
            <Route exact path='/'  render={(props) => <Posts {...props} posts = {this.state.posts} />}/>
            <Route exact path='/posts'  render={(props) => <Posts {...props} posts = {this.state.posts} />}/>
            <Route exact path='/posts/newpost' render={(props) => <AddPost {...props} AddPost= {this.add} />}/>
            <Route exact path='/posts/:id' render={(props) => <PostDetail {...props} post={this.getPost(props.match.params.id)}/>}/>
          </Switch>
        </div>
      </BrowserRouter>     
    );
  }
}

export default App;