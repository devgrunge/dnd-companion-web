export interface SignInProps {
  email: string;
  password: string;
  onEmailChange: () => void;
  onPasswordChange: () => void;
  onHandleLogin: () => void;
  connection: boolean | null;
}

export interface serverParams {
  handleEmailChange: () => void;
  handleNameChange: () => void;
  handlePasswordChange: () => void;
  navigate: () => void;
}
