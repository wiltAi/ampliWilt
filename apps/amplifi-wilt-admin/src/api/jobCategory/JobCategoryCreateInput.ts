import { JobCreateNestedManyWithoutJobCategoriesInput } from "./JobCreateNestedManyWithoutJobCategoriesInput";

export type JobCategoryCreateInput = {
  description?: string | null;
  isLive?: boolean | null;
  jobs?: JobCreateNestedManyWithoutJobCategoriesInput;
  name?: string | null;
};
