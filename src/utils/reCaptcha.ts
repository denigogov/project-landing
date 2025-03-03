type LoadReCAPTCHAtype = {
  setRecaptchaLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

export function loadReCAPTCHA({ setRecaptchaLoaded }: LoadReCAPTCHAtype) {
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
  script.async = true;
  script.defer = true;
  script.onload = () => setRecaptchaLoaded(true);
  document.body.appendChild(script);
}
