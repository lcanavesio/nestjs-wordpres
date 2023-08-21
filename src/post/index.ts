import * as crudResolversImport from "../../prisma/generated/type-graphql/resolvers/crud/resolvers-crud.index";
import { NonEmptyArray } from "type-graphql";

export * from "../../prisma/generated/type-graphql/enums";
export * from "../../prisma/generated/type-graphql/models";
export * from "../../prisma/generated/type-graphql/resolvers/crud";

export const crudResolvers = Object.values(crudResolversImport) as unknown as NonEmptyArray<Function>;

export * from "../../prisma/generated/type-graphql/resolvers/inputs";
export * from "../../prisma/generated/type-graphql/resolvers/outputs";
export * from "../../prisma/generated/type-graphql/enhance";
export * from "../../prisma/generated/type-graphql/scalars";

export const resolvers = [
  ...crudResolvers,

] as unknown as NonEmptyArray<Function>;
