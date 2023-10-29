import { JobCategoryWhereUniqueInput } from "../jobCategory/JobCategoryWhereUniqueInput";

export type JobUpdateInput = {
  address?: string | null;
  category?: JobCategoryWhereUniqueInput | null;
  description?: string | null;
  image?: string | null;
  ingress?: string | null;
  title?: string | null;
};
