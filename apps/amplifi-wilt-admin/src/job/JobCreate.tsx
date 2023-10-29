import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobCategoryTitle } from "../jobCategory/JobCategoryTitle";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceInput
          source="category.id"
          reference="JobCategory"
          label="category"
        >
          <SelectInput optionText={JobCategoryTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="ingress" source="ingress" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
