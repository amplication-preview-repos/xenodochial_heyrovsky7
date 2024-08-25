import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AgentWhereInput = {
  age?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
