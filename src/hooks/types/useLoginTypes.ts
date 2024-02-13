import { Characters } from "../../store/playerSlice/types/storeTypes";

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

interface Attribute {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  car: number;
}

interface FormData {
  name: string;
  level: number;
  class: string;
  attributes: Attribute;
  hitpoints: number;
  armor_class: number;
  initiative: number;
}

export interface PlayerHookResult {
  isLoading: boolean;
  characterList: Characters[];
  handleInputChange: (
    field: string | number,
    value: string | number | null
  ) => void;
  handleAttributeChange: (
    attribute: string | number,
    value: string | number
  ) => void;
  createCharacter: () => Promise<void>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  attributes: string[];
  classesOptions: string[];
  setPlayer: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  player: Record<string, any>;
}
