import { UserCreateNestedManyWithoutCompaniesInput } from "./UserCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: string | null;
  description?: string | null;
  email?: string | null;
  logo?: string | null;
  name?: string | null;
  orgNumber?: string | null;
  users?: UserCreateNestedManyWithoutCompaniesInput;
};
