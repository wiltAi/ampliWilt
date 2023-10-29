/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JobCategoryWhereInput } from "./JobCategoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JobCategoryOrderByInput } from "./JobCategoryOrderByInput";

@ArgsType()
class JobCategoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobCategoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JobCategoryWhereInput, { nullable: true })
  @Type(() => JobCategoryWhereInput)
  where?: JobCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: [JobCategoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JobCategoryOrderByInput], { nullable: true })
  @Type(() => JobCategoryOrderByInput)
  orderBy?: Array<JobCategoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { JobCategoryFindManyArgs as JobCategoryFindManyArgs };
