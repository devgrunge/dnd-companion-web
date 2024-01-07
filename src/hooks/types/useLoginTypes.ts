export interface SignInProps {
  email: string;
  password: string;
  onEmailChange: () => void;
  onPasswordChange: () => void;
  onHandleLogin: () => void;
  connection: boolean | null;
}

export interface serverParams {
  [x: string]: unknown;
  handleEmailChange: () => string;
  handleNameChange: () => string;
  handlePasswordChange: () => string;
  navigate: () => void;
  registerPlayer: (email: string, password: string, name: string) => Response;
}

export interface PlayerParams {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  characters: [];
  theme: string;
}
