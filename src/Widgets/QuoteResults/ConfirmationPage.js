import React from "react";
import $ from "jquery";
import "./styleconfirmation.css";

export default class ConfirmationPage extends React.Component {

  componentDidMount() {
    $("button").click(function() {
      $(".check-icon").hide();
      setTimeout(function() {
        $(".check-icon").show();
      }, 0);
    });
  }

  render() {
    return (
      <div className="confirmcss">
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        <div className="pol-issued">Thank you Major Alex, Your Auto policy has been processed. A confirmation and follow up steps are sent to your registered email address.</div>
      </div>
    );
  }
}
