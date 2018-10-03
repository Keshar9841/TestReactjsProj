import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// const name = 'Josh Perez';
// const element = <div><h1>Hello, {name}</h1> <div><App/></div></div>;

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
//   }

//   const user = {
//     firstName: 'Harper',
//     lastName: 'Perez',
//   };

//   const element = <h1>Hello, {formatName(user)}!</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
function formatDate(date) {
    return date.toLocaleDateString();
  }

  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
       <NumberList/>
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: [{
      name: 'Hello Kitty',
      avatarUrl: ['http://placekitten.com/g/64/64'],
    },{
        name: 'Hello Kitty1',
        avatarUrl: ['http://placekitten.com/g/64/64'],
      }],
  };
  function Imagelist(props){
      console.log(props);
    return <img
    className="Avatar"
    src={props.value.avatarUrl}
    alt={props.value.name}
  />
  }
  function NumberList() {
    const list= comment.author.map((aut,index)=>   <div key={index}><Imagelist value={aut}/> </div>);

    return list;
  }

  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementById('root')
  );
