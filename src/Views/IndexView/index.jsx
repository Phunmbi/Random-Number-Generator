import React, {Component} from 'react';
import Download from './Images/Download.svg';
import './IndexView.scss';

class IndexView extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/generated');
  };

  render() {
    return (
      <div className="generator">
        <div className="generator-title">
          <h2>Random Number Generator</h2>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" placeholder="How many numbers would you like to generate?"/>
          <div className="generator-actions">
            <input type="submit" value="Generate Numbers"/>
            <div  className="generator-actions__download">
              <img src={Download} alt="Load from file"/>
              <p>Load from File</p>
            </div>
          </div>
        </form>
        {/*<hr/>*/}
      </div>
    );
  }
}

export default IndexView;
