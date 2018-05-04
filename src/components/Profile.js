import React from 'react';
// import material-ui components
import { List, ListItem } from 'material-ui/List';

const Profile = (props) => {
  let repos = props.repos.map((repo, key) => {
    return <ListItem primaryText={repo.name} key={key} containerElement={<a href={repo.html_url} target="_blank" rel="noopener noreferrer" />}></ListItem>
  });
  return (
    <div className="profile">
      <img src={props.image} alt={`Profile of ${props.username}`} />
      <h2>{props.username}</h2>
      <List>
        {repos}
      </List>
    </div>
  )
}

export default Profile;