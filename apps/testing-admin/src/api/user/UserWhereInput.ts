import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  project?: ProjectListRelationFilter;
  tasks?: TaskListRelationFilter;
  username?: StringFilter;
};
