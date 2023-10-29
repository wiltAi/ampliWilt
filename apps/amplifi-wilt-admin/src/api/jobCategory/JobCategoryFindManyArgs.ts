import { JobCategoryWhereInput } from "./JobCategoryWhereInput";
import { JobCategoryOrderByInput } from "./JobCategoryOrderByInput";

export type JobCategoryFindManyArgs = {
  where?: JobCategoryWhereInput;
  orderBy?: Array<JobCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
