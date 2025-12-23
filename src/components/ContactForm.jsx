import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function ContactForm() {
  const [token, setToken] = useState(null);

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
      alert("Captcha failed");
      return;
    }

    alert("Captcha verified!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        onChange={setToken}
      />
      <button type="submit">Submit</button>
    </form>
  );
}