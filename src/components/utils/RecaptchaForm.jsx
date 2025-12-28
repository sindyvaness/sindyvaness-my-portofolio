import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import ReCaptchaButton from "./ReCaptchaButton";

export default function RecaptchaForm( props) {
  const [token, setToken] = useState(null);

  const { buttonText } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please verify captcha");
      return;
    }

    const res = await fetch(
      process.env.REACT_APP_VERIFY_URL,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ captchaToken: token })
      }
    );

    if (!res.ok) {
      console.log("Captcha failed");
      return;
    }

    console.log("Captcha verified!");
  };

  return (
    <form className="recaptcha-form" onSubmit={handleSubmit}>
      <div className="modal-body">
        <ReCAPTCHA
          className="my-recaptcha"
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={setToken}
        ></ReCAPTCHA>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <ReCaptchaButton buttonText = { buttonText || "Submit"}></ReCaptchaButton>
      </div>
    </form>
  );
}