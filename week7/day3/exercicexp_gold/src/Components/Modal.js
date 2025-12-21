import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <h3>Error: Something went wrong!</h3>

          <details>
            <summary>Details</summary>
            <p>{this.props.errorInfo}</p>
            <p>in r</p>
            <p>in div</p>
             <p>in c</p>
            <p>in StrictModal</p>
            <p>Please try it again</p>
          </details>

          

          <button onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
