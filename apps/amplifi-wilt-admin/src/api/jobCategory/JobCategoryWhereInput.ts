import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type JobCategoryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isLive?: BooleanNullableFilter;
  jobs?: JobListRelationFilter;
  name?: StringNullableFilter;
};
