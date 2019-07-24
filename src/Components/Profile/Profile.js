import React from 'react';
// import material-ui components
import { List, ListItem, ListItemText } from '@material-ui/core';

export default function Profile(props) {
  return (
    <div className="profile">
      <img src={props.image} alt={`Profile of ${props.username}`} />
      <h2>{props.username}</h2>
      <List>
        {
          props.repos.map((repo, key) => {
            return (
              <ListItem
                button
                component="a"
                href={repo.html_url}
                target="__blank"
                key={key}
              >
                <ListItemText primary={repo.name} />
              </ListItem>
            )
          })
        }
      </List>
    </div>
  )
}
