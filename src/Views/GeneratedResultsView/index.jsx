import React, {Component} from 'react';
import Home from './Images/Home.svg';
import Upload from './Images/Upload.svg';
import './GeneratedResults.scss';

class GeneratedResults extends Component {
  SingleGeneratedNumber = (int) => {
    return (
      <p className="results-single-number">{int}</p>
    )
  };

  render() {
    return (
      <div className="results">
        <div className="results-title">
          <h2>Generated Numbers</h2>
        </div>

        <div className="results-wrapper">
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
          {this.SingleGeneratedNumber(78433222)}
        </div>

        <div className="results-actions">
          <div onClick={() => this.props.history.push('/')} >
            <img src={Home} alt="Home"/>
            <p>Home</p>
          </div>
          <div>
            <img src={Upload} alt="Save Numbers" />
            <p>Save Numbers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneratedResults;
