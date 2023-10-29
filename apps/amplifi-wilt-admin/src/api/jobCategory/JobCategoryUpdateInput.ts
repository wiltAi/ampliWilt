import { JobUpdateManyWithoutJobCategoriesInput } from "./JobUpdateManyWithoutJobCategoriesInput";

export type JobCategoryUpdateInput = {
  description?: string | null;
  isLive?: boolean | null;
  jobs?: JobUpdateManyWithoutJobCategoriesInput;
  name?: string | null;
};
