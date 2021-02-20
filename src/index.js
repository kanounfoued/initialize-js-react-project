import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import Header from './header';

class Welcome extends React.Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <App />
      </>
    );
  }
}
render(<Welcome />, document.getElementById('root'));
