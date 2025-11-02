export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface TokensWithId extends Tokens {
  id: string;
}

export interface Standard {
  value: string;
  key: string;
}

export interface Children {
  category: string | null;
  createdAt: string;
  deletedAt: null;
  dob: string;
  gender: null;
  id: string;
  image: string | null;
  name: string;
  standard: Standard;
  updatedAt: string;
  userId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  mobile: string | null;
  profession: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  relation: string | null;
  childCount: number;
  children: Children[] | null;
  zipCode: number | null;
  toCompleteProfile: boolean | null;
  toEnroll: boolean | null;
  hasProfileInfo: boolean | null;
  hasSetPreference: boolean,
  hasChildInfo: boolean | null;
  createdAt: string | null;
  updatedAt: string | null;
  authMethod:string;
  whatsappVerified:boolean|null
}
