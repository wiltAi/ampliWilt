import { User } from "../user/User";

export type Company = {
  address: string | null;
  createdAt: Date;
  description: string | null;
  email: string | null;
  id: string;
  logo: string | null;
  name: string | null;
  orgNumber: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
