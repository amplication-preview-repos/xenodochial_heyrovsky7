import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AgentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Age" source="age" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
