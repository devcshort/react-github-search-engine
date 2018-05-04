import React, { Component } from 'react';
// import custom components
import Profile from './components/Profile';
import Footer from './components/Footer';
// import material-ui components
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Loader from 'material-ui/CircularProgress';
// import stylesheet
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      image: '',
      searched: false,
      repos: [],
      loading: false
    }
  }

  onFormSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        fetch(json.repos_url)
          .then((repoRes) => {
            return repoRes.json();
          })
          .then((repoJson) => {
            this.setState({
              loading: false,
              repos: repoJson,
              image: json.avatar_url,
              searched: true
            });
          })
          .catch((repoErr) => {
            console.log(repoErr);
          })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onUsernameChangeHandler = (e) => {
    this.setState({
      searched: false,
      username: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="formContainer">
          <h1>Github Searcher</h1>
          <form onSubmit={this.onFormSubmitHandler}>
            <TextField
              onChange={this.onUsernameChangeHandler}
              type="text"
              floatingLabelText="Enter a Github username"
            />
            <FlatButton label="Search" type="submit" />
          </form>

          {this.state.loading ? <Loader style={{display: "block", margin: "15px auto"}} /> : null}

          {this.state.searched ?
          <Profile
            username={this.state.username}
            image={this.state.image}
            repos={this.state.repos}
          /> : null}

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
