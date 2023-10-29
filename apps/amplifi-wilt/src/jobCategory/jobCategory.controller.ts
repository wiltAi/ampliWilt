import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobCategoryService } from "./jobCategory.service";
import { JobCategoryControllerBase } from "./base/jobCategory.controller.base";

@swagger.ApiTags("jobCategories")
@common.Controller("jobCategories")
export class JobCategoryController extends JobCategoryControllerBase {
  constructor(
    protected readonly service: JobCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
