import React, { useState } from "react";
import { connect } from "react-redux";
import { setEmail } from "../../../store/actions";

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setEmail(email)),
});

export default connect(
  null,
  mapDispatchToProps
)((props) => {
  const [email, setEmail] = useState("");
  const { setEmail: setEmailAddress } = props;
  return (
    <div class="card text-center">
      <div class="card-header">Please Provide Your Email Address</div>
      <div class="card-body">
        <div class="row email-input-container mb-5">
          <input
            type="text"
            class="form-control"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div class="row justify-content-center">
          <a
            href="#"
            class="btn btn-primary "
            onClick={() => {
              setEmailAddress(email);
            }}
          >
            Start the survey
          </a>
        </div>
      </div>
    </div>
  );
});
