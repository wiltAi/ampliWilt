import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompanyWhereInput = {
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  name?: StringNullableFilter;
  orgNumber?: StringNullableFilter;
  users?: UserListRelationFilter;
};
