import SignUp from "../components/SignUp";
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
      serverProps={{
        registerPlayer,
        handleNameChange,
        navigate,
        handlePasswordChange,
        handleEmailChange,
      }}
    />
  );
};
