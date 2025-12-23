const ReCaptchaButton = ( props ) => {
    return (
        <div>
            <button className="recaptcha-button" type="submit">{props.buttonText || "Submit"}</button>
        </div>
    );
};

export default ReCaptchaButton;