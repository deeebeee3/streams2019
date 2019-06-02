import history from "../../history";
import React from "react";
import { connect } from "react-redux";
import Modal from "../../components/Modal";
import { fetchStream, deleteStream } from "../../actions";
class StreamDelete extends React.Component {
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete "${
      this.props.stream.title
    }" stream?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateTopProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateTopProps,
  { fetchStream, deleteStream }
)(StreamDelete);
