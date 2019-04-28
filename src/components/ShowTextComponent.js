import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTextAction, addTextAction } from "../actions";

class ShowTextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }
  hanldeChangeQuantity(quantity) {
    this.setState({
      quantity
    });
  }
  render() {
    // console.log(this.state.quantity);
    const quantityFirtFetch = 1;
    return (
      <div style={{ width: "50%" }}>
        <input
          className="input"
          text="text"
          onChange={e => this.hanldeChangeQuantity(e.target.value)}
          value={this.state.quantity}
        />
        <button
          className="btn btn-primary"
          onClick={() => this.props.onFetchText(quantityFirtFetch)}
        >
          fetch Text
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => this.props.onAddText(quantityFirtFetch)}
        >
          add Text
        </button>
        <hr />
        <div>
          {this.props.textReducers.map((d, index) => (
            <p key={index}>{d}</p>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    textReducers: state.textReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchText: quantity => {
      dispatch(fetchTextAction(quantity));
    },
    onAddText: quantity => {
      dispatch(addTextAction(quantity));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTextComponent);
