import { SignUp } from "../components/SignUp";
import { useLogin } from "../hooks/useLogin";

export const Register = () => {
  const {
    registerPlayer,
    handleNameChange,
    navigate,
    handlePasswordChange,
    handleEmailChange,
  } = useLogin();

  return (
    <SignUp
      registerPlayer={registerPlayer}
      handleEmailChange={handleEmailChange}
      handleNameChange={handleNameChange}
      handlePasswordChange={handlePasswordChange}
      navigate={navigate}
    />
  );
};
