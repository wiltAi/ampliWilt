import { SortOrder } from "../../util/SortOrder";

export type JobCategoryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isLive?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
