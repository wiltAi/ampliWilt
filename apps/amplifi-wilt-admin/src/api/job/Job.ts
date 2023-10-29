import { JobCategory } from "../jobCategory/JobCategory";

export type Job = {
  address: string | null;
  category?: JobCategory | null;
  createdAt: Date;
  description: string | null;
  id: string;
  ingress: string | null;
  title: string | null;
  updatedAt: Date;
};
