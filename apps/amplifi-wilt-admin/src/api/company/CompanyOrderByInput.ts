import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  name?: SortOrder;
  orgNumber?: SortOrder;
  updatedAt?: SortOrder;
};
