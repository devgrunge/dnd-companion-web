export interface PlayerData {
  token: string;
  id: string;
  email: string;
  password: string;
  name: string;
  characters: Characters[];
  isDm: boolean;
  theme: string;
}

export interface Characters {
  id: string;
  name: string;
  level: number;
  class: string;
  attributes: CharacterAttributes;
  hitpoints: number;
  armor_class: number;
  initiative: number;
}

export interface CharacterAttributes {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  car: number;
}
