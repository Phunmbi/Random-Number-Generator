import React, {Component} from 'react';
import './IndexView.scss';

class IndexView extends Component {
  state = {
    amountToGenerate: 1000
  };

  handleChange = (e) => {
    this.setState({
      amountToGenerate: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/generated?${this.state.amountToGenerate}`);
  };

  render() {
    return (
      <div className="generator">
        <div className="generator-title">
          <h2>Random Number Generator</h2>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.amountToGenerate}
            onChange={(e) => this.handleChange(e)}
            className="generator-input"
            placeholder="How many numbers would you like to generate?"/>
          <div className="generator-actions">
            <input type="submit" value="Generate Numbers"/>
          </div>
        </form>
      </div>
    );
  }
}

export default IndexView;
