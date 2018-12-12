import React, { Component } from 'react';
import {Redirect } from 'react-router-dom'

class AddPost extends Component {
    state = {
        redirect: false,
        title:'',
        category:'',
        content: ''
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    save = (event) => {
        event.preventDefault();
        const {title,category,content} = this.state;
        this.props.AddPost(title, category,content);
        this.setRedirect();
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    handleChange = (event) => {
        if(event.target.name === 'title') {
            this.setState({title: event.target.value});
        } else if(event.target.name === 'category'){
            this.setState({category: event.target.value});
        } else {
            this.setState({content: event.target.value});
        }
    }

  render() {
    return (
        <div className="fromContainer">
            {this.renderRedirect()}
            <h3>New Post</h3>            
            <form  onSubmit={this.save}>
                <div className="inputWrapper">
                    <label className="inputLabel">Title:</label>
                    <input name="title" className="inputField" type="text" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="inputWrapper">
                    <label className="inputLabel">Category:</label>
                    <input name="category" className="inputField" type="text" value={this.state.category} onChange={this.handleChange} />
                </div>  
                <label >Write new post:</label>
                <textarea name="content"value={this.state.content} onChange={this.handleChange} rows="10"/>
                <div className="button-wrapper">
                    <button  type="submit" className="whiteFont blueBackground">Save</button>
                    <button type="button" onClick={this.setRedirect} className="whiteFont blueBackground">Cancel</button>
                </div>               
            </form>
        </div>        
    );
  }
}

export default AddPost;
