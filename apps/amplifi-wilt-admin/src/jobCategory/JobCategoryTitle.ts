import { JobCategory as TJobCategory } from "../api/jobCategory/JobCategory";

export const JOBCATEGORY_TITLE_FIELD = "name";

export const JobCategoryTitle = (record: TJobCategory): string => {
  return record.name?.toString() || String(record.id);
};
