import * as TypeGraphQL from "type-graphql";

export enum Wp_term_taxonomyScalarFieldEnum {
  term_taxonomy_id = "term_taxonomy_id",
  term_id = "term_id",
  taxonomy = "taxonomy",
  description = "description",
  parent = "parent",
  count = "count"
}
TypeGraphQL.registerEnumType(Wp_term_taxonomyScalarFieldEnum, {
  name: "Wp_term_taxonomyScalarFieldEnum",
  description: undefined,
});
