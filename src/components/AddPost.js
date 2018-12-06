import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class AddPost extends Component {
    state = {
        redirect: false
    }


    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    save = () => {
        this.setRedirect();
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

  render() {
    return (
        <div>
            {this.renderRedirect()}
            <h3>Add new post</h3>
            <form>
                <input type="text" />
                <button onClick={this.setRedirect}>Add</button>
                <button onClick={this.setRedirect}>Cancel</button>
            </form>
        </div>        
    );
  }
}

export default AddPost;
