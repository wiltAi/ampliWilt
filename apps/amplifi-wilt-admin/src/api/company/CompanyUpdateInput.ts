import { UserUpdateManyWithoutCompaniesInput } from "./UserUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: string | null;
  description?: string | null;
  email?: string | null;
  logo?: string | null;
  name?: string | null;
  orgNumber?: string | null;
  users?: UserUpdateManyWithoutCompaniesInput;
};
