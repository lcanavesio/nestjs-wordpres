import * as TypeGraphQL from "type-graphql";

export enum Wp_termsScalarFieldEnum {
  term_id = "term_id",
  name = "name",
  slug = "slug",
  term_group = "term_group"
}
TypeGraphQL.registerEnumType(Wp_termsScalarFieldEnum, {
  name: "Wp_termsScalarFieldEnum",
  description: undefined,
});
