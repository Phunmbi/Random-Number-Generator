import React, {Component} from 'react';
import { generateNumbers, saveToFile, sortAscending, sortDescending } from '../../Helpers/GeneratorLogic';
import Home from './Images/Home.svg';
import Upload from './Images/Upload.svg';
import Ascending from './Images/Ascending.svg';
import Descending from './Images/Descending.svg';
import './GeneratedResults.scss';

class GeneratedResults extends Component {
  state = {
    numbers: []
  };

  componentDidMount() {
    this.setState({
      numbers: generateNumbers(Number(this.props.location.search.slice(1, this.props.location.search.length)))
    })
  }

  SingleGeneratedNumber = (int) => {
    return (
      <p key={int} className="results-single-number">{int}</p>
    )
  };

  handleAscendingSort = () => {
    this.setState({
      numbers: sortAscending(this.state.numbers)
    })
  };

  handleDescendingSort = () => {
    this.setState({
      numbers: sortDescending(this.state.numbers)
    })
  };

  renderSorting = () => {
    return (
      <div className="results-sort">
        <div onClick={() => this.handleAscendingSort()} className="results-sort__ascending">
          <img src={Ascending} alt="Ascending" />
        </div>
        <div onClick={() => this.handleDescendingSort()} className="results-sort__descending">
          <img src={Descending} alt="Descending" />
        </div>
        <div className="results-sort__Total">
          <h3>Total numbers:</h3>
          <p>{this.state.numbers.length}</p>
        </div>
      </div>
    )
  };

  render() {
    return (
      <div className="results">
        <div className="results-title">
          <h2>Generated Numbers</h2>
        </div>
        {this.renderSorting()}
        <div className="results-wrapper">
          {this.state.numbers.map((each) => {
            return this.SingleGeneratedNumber(each);})}
        </div>
        <div className="results-actions">
          <div onClick={() => this.props.history.push('/')} >
            <img src={Home} alt="Home"/>
            <p>Home</p>
          </div>
          <div onClick={() => saveToFile(this.state.numbers)}>
            <img src={Upload} alt="Save Numbers" />
            <p>Save Numbers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneratedResults;
