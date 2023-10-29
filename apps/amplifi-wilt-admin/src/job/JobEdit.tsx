import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobCategoryTitle } from "../jobCategory/JobCategoryTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <TextInput label="image" source="image" />
        <TextInput label="ingress" source="ingress" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
