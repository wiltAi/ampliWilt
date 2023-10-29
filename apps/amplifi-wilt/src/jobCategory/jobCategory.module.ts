import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JobCategoryModuleBase } from "./base/jobCategory.module.base";
import { JobCategoryService } from "./jobCategory.service";
import { JobCategoryController } from "./jobCategory.controller";
import { JobCategoryResolver } from "./jobCategory.resolver";

@Module({
  imports: [JobCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [JobCategoryController],
  providers: [JobCategoryService, JobCategoryResolver],
  exports: [JobCategoryService],
})
export class JobCategoryModule {}
