import React from 'react';
import ReactDOM from 'react-dom';


class Message extends React.Component {
    render() {
        return(
          <div>
              <h1 style={{color: this.props.color}}>
                  {this.props.msg}
              </h1>
          </div>
        );
    }
}

ReactDOM.render(
    <Message color='blue' msg='Hello, How are you?'/>,
    document.getElementById('root')
);