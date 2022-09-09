import { signInWithGooglePopup, createDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createDocumentFromAuth(user);
  }
  return (
    <>
    <h1>SignIn Page</h1>
    <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  );
};

export default SignIn;
