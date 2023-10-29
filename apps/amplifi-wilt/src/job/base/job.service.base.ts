/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Job, JobCategory } from "@prisma/client";

export class JobServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JobCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobCountArgs>
  ): Promise<number> {
    return this.prisma.job.count(args);
  }

  async findMany<T extends Prisma.JobFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobFindManyArgs>
  ): Promise<Job[]> {
    return this.prisma.job.findMany(args);
  }
  async findOne<T extends Prisma.JobFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobFindUniqueArgs>
  ): Promise<Job | null> {
    return this.prisma.job.findUnique(args);
  }
  async create<T extends Prisma.JobCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobCreateArgs>
  ): Promise<Job> {
    return this.prisma.job.create<T>(args);
  }
  async update<T extends Prisma.JobUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobUpdateArgs>
  ): Promise<Job> {
    return this.prisma.job.update<T>(args);
  }
  async delete<T extends Prisma.JobDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobDeleteArgs>
  ): Promise<Job> {
    return this.prisma.job.delete(args);
  }

  async getCategory(parentId: string): Promise<JobCategory | null> {
    return this.prisma.job
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}
