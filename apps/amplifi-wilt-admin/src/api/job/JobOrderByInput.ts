import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  address?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  ingress?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
