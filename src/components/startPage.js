import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "./useForm";
import "./Startpage.css";

const StartPage = (props) => {
  const [values, handleChange] = useForm({
    email: "your-email@example.com",
    name: "firstname_lastname",
  });

  const updateProp = () => {
    let email = values.email;
    let name = values.name;

    props.updatedData(email, name);
  };

  return (
    <div className="StartPage">
      <h1>Lets get started!</h1>
      <p>
        Welcome to our study, please make sure you have about{" "}
        <strong>30 minutes</strong> of time spare.
      </p>

      <hr></hr>
      <h2>Requirements</h2>
      <ol style={{ listStyleType: "clear" }}>
        <li>Laptop or PC with Webcam</li>
        <li>
          Good room lighting (Make sure there is no strong light behind you)
        </li>
        <li>No glasses, contact lenses are just fine</li>
        <li>Google Chrome Browser</li>
        <li>~30 minutes of spare time</li>
      </ol>

      <hr></hr>
      <h2>The study</h2>
      <p>
        In this study, we are trying to understand how users experience and
        evaluate emails in a natural environment, such as an email client.{" "}
      </p>

      <p>
        Choose an alias and type in your alias-email address and username for
        your virtual email account.{" "}
      </p>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        style={{ width: 400, marginRight: "20px" }}
      ></input>
      <input name="name" value={values.name} onChange={handleChange}></input>

      <p>
        With starting the study you will be asked to calibrate your webcam.
        Please follow the steps shown on your screen.{" "}
      </p>
      <p>
        After the calibration step you are ready to go! Make sure to complete
        the study in one continous session, meaning you should not stop the
        study and continue later on.{" "}
      </p>

      <p>
        <strong>Your task: </strong>Pretend you are working as a secretary in an
        important Start-Up. Your Job is to go through your bosses custom
        email-client as your first task in the morning. Go through all the
        Emails and select the right inbox for each email.
      </p>
      <p>
        <strong>After you have finished your task</strong> forward the inboxes
        to your boss by clicking <strong>"Submit"</strong> on the top right of
        your email client before clicking <strong>"Continue"</strong> to go to
        the post study questionnaires
      </p>
      <hr></hr>
      <h2>Consent:</h2>
      <p>
        <strong>
          <p>
            Please agree with the terms and conditions below before proceeding.{" "}
          </p>
        </strong>
      </p>
      <p>
        {" "}
        1. I am aware that the collection, processing and use of my data is
        voluntary. The experiment can be canceled by me at any time without
        mentioning reasons and without causing me any disadvantages. In the
        event of cancellation, all data recorded of me will be irrevocably
        deleted.{" "}
      </p>

      <p>
        2. I agree that my following data are processed: a) demographics b) Gaze
        data and mouse movements, c) feedback questionnaires{" "}
      </p>

      <p>
        3. I agree that my data will be collected, processed, used and stored by
        Bundeswehr University Munich for the following purposes: a) published by
        the Bundeswehr University Munich as a scientific publication. The data
        is published completely anonymously, i.e., the collected data cannot be
        related to respective participants. b) The anonymized data is stored for
        an indefinite period of time.
        <p>
          4. I have been informed that my personal data collected in the context
          of the above purposes will be processed in compliance with the General
          Data Protection Regulation (GDPR and BayDSG).
        </p>
      </p>
      <Link
        to="/EmailClient"
        activeClassName="active"
        style={{ marginBottom: "40px", marginLeft: "40px" }}
      >
        <button
          onClick={updateProp}
          style={{ width: "300px", marginBottom: "40px" }}
        >
          I agree
        </button>
      </Link>
    </div>
  );
};

export default StartPage;
