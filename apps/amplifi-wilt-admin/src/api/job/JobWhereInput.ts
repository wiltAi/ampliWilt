import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobCategoryWhereUniqueInput } from "../jobCategory/JobCategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type JobWhereInput = {
  address?: StringNullableFilter;
  category?: JobCategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  ingress?: StringNullableFilter;
  title?: StringNullableFilter;
};
