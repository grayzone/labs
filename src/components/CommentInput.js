import React from "react";

export default class CommentInput extends React.Component {
  static propTypes = {
    username: React.PropTypes.any,
    onSubmit: React.PropTypes.func,
    onUserNameInputBlur: React.PropTypes.func
  };
  static defaultProps = {
    username: ""
  };
  state = {
    username: this.props.username,
    cotent: ""
  };
  componentDidMount() {
    this.textarea.focus();
  }
  handleUsernameBlur = event => {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(event.target.value);
    }
  };
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleContentChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  handleSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      });
    }
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <div>
          <span>User name : </span>
          <div>
            <input
              value={this.state.username}
              onBlur={this.handleUsernameBlur}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div>
          <span>Comment:</span>
        </div>
      </div>
    );
  }
}
