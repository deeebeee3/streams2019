import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    console.log(this.props); //props has to be this.props if class based component

    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateTopProps = (state, ownProps) => {
  //ownProps is the same props object that shows up inside StreamEdit component
  //console.log(ownProps);

  //give our props object the stream
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateTopProps,
  { fetchStream }
)(StreamEdit);
