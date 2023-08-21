import * as TypeGraphQL from "type-graphql";

export enum Wp_usersScalarFieldEnum {
  ID = "ID",
  user_login = "user_login",
  user_pass = "user_pass",
  user_nicename = "user_nicename",
  user_email = "user_email",
  user_url = "user_url",
  user_registered = "user_registered",
  user_activation_key = "user_activation_key",
  user_status = "user_status",
  display_name = "display_name"
}
TypeGraphQL.registerEnumType(Wp_usersScalarFieldEnum, {
  name: "Wp_usersScalarFieldEnum",
  description: undefined,
});
