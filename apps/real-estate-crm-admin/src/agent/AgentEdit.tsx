import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AgentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Age" source="age" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
