import React, {Component} from 'react';
import { generateNumbers } from '../../Helpers/GeneratorLogic';
import { saveToFile } from "../../Helpers/saveToFile";
import { sortAscending } from "../../Helpers/sortAscending";
import { sortDescending } from "../../Helpers/sortDescending";
import Home from './Images/Home.svg';
import Upload from './Images/Upload.svg';
import Ascending from './Images/Ascending.svg';
import Descending from './Images/Descending.svg';
import './GeneratedResults.scss';

class GeneratedResults extends Component {
  state = {
    numbers: [],
    maxNumber: null,
    minNumber: null
  };

  componentDidMount() {
    const generatedNumbersAutoSortedAscending = sortAscending(
      generateNumbers(Number(this.props.location.search.slice(1, this.props.location.search.length)))
    );

    this.setState({
      numbers: generatedNumbersAutoSortedAscending,
      minNumber: generatedNumbersAutoSortedAscending[0],
      maxNumber: generatedNumbersAutoSortedAscending[generatedNumbersAutoSortedAscending.length - 1],
    })
  }

  SingleGeneratedNumber = (int, index) => {
    return (
      <div key={index}>
        {index + 1}
        <p className="results-single-number">{int}</p>
      </div>
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
          <p>Sort Ascending</p>
        </div>
        <div onClick={() => this.handleDescendingSort()} className="results-sort__descending">
          <img src={Descending} alt="Descending" />
          <p>Sort Descending</p>
        </div>
        <div className="results-sort__Total">
          <h3>Total numbers:</h3>
          <p>{this.state.numbers.length}</p>
        </div>
        <div className="results-sort__Min">
          <h3>Minimum Number:</h3>
          <p>{this.state.minNumber}</p>
        </div>
        <div className="results-sort__Maxa">
          <h3>Maximum Number:</h3>
          <p>{this.state.maxNumber}</p>
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
          {this.state.numbers.map((each, index) => {
            return this.SingleGeneratedNumber(each, index);})}
        </div>
        <div className="results-actions">
          <div className="results-actions__redirect" onClick={() => this.props.history.push('/')} >
            <img src={Home} alt="Home"/>
            <p>Home</p>
          </div>
          <div className="results-actions__upload" onClick={() => saveToFile(this.state.numbers)}>
            <img src={Upload} alt="Save Numbers" />
            <p>Save Numbers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneratedResults;
