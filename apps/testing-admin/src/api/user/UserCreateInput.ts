import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  project?: ProjectCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
