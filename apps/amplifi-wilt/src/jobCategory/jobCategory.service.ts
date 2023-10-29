import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobCategoryServiceBase } from "./base/jobCategory.service.base";

@Injectable()
export class JobCategoryService extends JobCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
