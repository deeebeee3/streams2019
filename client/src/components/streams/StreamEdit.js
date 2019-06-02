import React from "react";
import { connect } from "react-redux";

const StreamEdit = props => {
  console.log(props);
  return <div>StreamEdit</div>;
};

const mapStateTopProps = (state, ownProps) => {
  //ownProps is the same props object that shows up inside StreamEdit component
  //console.log(ownProps);

  //give our props object the stream
  return {
    stream: { stream: state.streams[ownProps.match.params.id] }
  };
};

export default connect(mapStateTopProps)(StreamEdit);
