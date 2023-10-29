import { Job } from "../job/Job";

export type JobCategory = {
  createdAt: Date;
  description: string | null;
  id: string;
  isLive: boolean | null;
  jobs?: Array<Job>;
  name: string | null;
  updatedAt: Date;
};
