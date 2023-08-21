import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Wp_commentmeta: crudResolvers.Wp_commentmetaCrudResolver,
  Wp_comments: crudResolvers.Wp_commentsCrudResolver,
  Wp_links: crudResolvers.Wp_linksCrudResolver,
  Wp_options: crudResolvers.Wp_optionsCrudResolver,
  Wp_postmeta: crudResolvers.Wp_postmetaCrudResolver,
  Wp_posts: crudResolvers.Wp_postsCrudResolver,
  Wp_term_relationships: crudResolvers.Wp_term_relationshipsCrudResolver,
  Wp_term_taxonomy: crudResolvers.Wp_term_taxonomyCrudResolver,
  Wp_termmeta: crudResolvers.Wp_termmetaCrudResolver,
  Wp_terms: crudResolvers.Wp_termsCrudResolver,
  Wp_usermeta: crudResolvers.Wp_usermetaCrudResolver,
  Wp_users: crudResolvers.Wp_usersCrudResolver
};
const actionResolversMap = {
  Wp_commentmeta: {
    aggregateWp_commentmeta: actionResolvers.AggregateWp_commentmetaResolver,
    createManyWp_commentmeta: actionResolvers.CreateManyWp_commentmetaResolver,
    createOneWp_commentmeta: actionResolvers.CreateOneWp_commentmetaResolver,
    deleteManyWp_commentmeta: actionResolvers.DeleteManyWp_commentmetaResolver,
    deleteOneWp_commentmeta: actionResolvers.DeleteOneWp_commentmetaResolver,
    findFirstWp_commentmeta: actionResolvers.FindFirstWp_commentmetaResolver,
    findFirstWp_commentmetaOrThrow: actionResolvers.FindFirstWp_commentmetaOrThrowResolver,
    wp_commentmetas: actionResolvers.FindManyWp_commentmetaResolver,
    wp_commentmeta: actionResolvers.FindUniqueWp_commentmetaResolver,
    getWp_commentmeta: actionResolvers.FindUniqueWp_commentmetaOrThrowResolver,
    groupByWp_commentmeta: actionResolvers.GroupByWp_commentmetaResolver,
    updateManyWp_commentmeta: actionResolvers.UpdateManyWp_commentmetaResolver,
    updateOneWp_commentmeta: actionResolvers.UpdateOneWp_commentmetaResolver,
    upsertOneWp_commentmeta: actionResolvers.UpsertOneWp_commentmetaResolver
  },
  Wp_comments: {
    aggregateWp_comments: actionResolvers.AggregateWp_commentsResolver,
    createManyWp_comments: actionResolvers.CreateManyWp_commentsResolver,
    createOneWp_comments: actionResolvers.CreateOneWp_commentsResolver,
    deleteManyWp_comments: actionResolvers.DeleteManyWp_commentsResolver,
    deleteOneWp_comments: actionResolvers.DeleteOneWp_commentsResolver,
    findFirstWp_comments: actionResolvers.FindFirstWp_commentsResolver,
    findFirstWp_commentsOrThrow: actionResolvers.FindFirstWp_commentsOrThrowResolver,
    findManyWp_comments: actionResolvers.FindManyWp_commentsResolver,
    findUniqueWp_comments: actionResolvers.FindUniqueWp_commentsResolver,
    findUniqueWp_commentsOrThrow: actionResolvers.FindUniqueWp_commentsOrThrowResolver,
    groupByWp_comments: actionResolvers.GroupByWp_commentsResolver,
    updateManyWp_comments: actionResolvers.UpdateManyWp_commentsResolver,
    updateOneWp_comments: actionResolvers.UpdateOneWp_commentsResolver,
    upsertOneWp_comments: actionResolvers.UpsertOneWp_commentsResolver
  },
  Wp_links: {
    aggregateWp_links: actionResolvers.AggregateWp_linksResolver,
    createManyWp_links: actionResolvers.CreateManyWp_linksResolver,
    createOneWp_links: actionResolvers.CreateOneWp_linksResolver,
    deleteManyWp_links: actionResolvers.DeleteManyWp_linksResolver,
    deleteOneWp_links: actionResolvers.DeleteOneWp_linksResolver,
    findFirstWp_links: actionResolvers.FindFirstWp_linksResolver,
    findFirstWp_linksOrThrow: actionResolvers.FindFirstWp_linksOrThrowResolver,
    findManyWp_links: actionResolvers.FindManyWp_linksResolver,
    findUniqueWp_links: actionResolvers.FindUniqueWp_linksResolver,
    findUniqueWp_linksOrThrow: actionResolvers.FindUniqueWp_linksOrThrowResolver,
    groupByWp_links: actionResolvers.GroupByWp_linksResolver,
    updateManyWp_links: actionResolvers.UpdateManyWp_linksResolver,
    updateOneWp_links: actionResolvers.UpdateOneWp_linksResolver,
    upsertOneWp_links: actionResolvers.UpsertOneWp_linksResolver
  },
  Wp_options: {
    aggregateWp_options: actionResolvers.AggregateWp_optionsResolver,
    createManyWp_options: actionResolvers.CreateManyWp_optionsResolver,
    createOneWp_options: actionResolvers.CreateOneWp_optionsResolver,
    deleteManyWp_options: actionResolvers.DeleteManyWp_optionsResolver,
    deleteOneWp_options: actionResolvers.DeleteOneWp_optionsResolver,
    findFirstWp_options: actionResolvers.FindFirstWp_optionsResolver,
    findFirstWp_optionsOrThrow: actionResolvers.FindFirstWp_optionsOrThrowResolver,
    findManyWp_options: actionResolvers.FindManyWp_optionsResolver,
    findUniqueWp_options: actionResolvers.FindUniqueWp_optionsResolver,
    findUniqueWp_optionsOrThrow: actionResolvers.FindUniqueWp_optionsOrThrowResolver,
    groupByWp_options: actionResolvers.GroupByWp_optionsResolver,
    updateManyWp_options: actionResolvers.UpdateManyWp_optionsResolver,
    updateOneWp_options: actionResolvers.UpdateOneWp_optionsResolver,
    upsertOneWp_options: actionResolvers.UpsertOneWp_optionsResolver
  },
  Wp_postmeta: {
    aggregateWp_postmeta: actionResolvers.AggregateWp_postmetaResolver,
    createManyWp_postmeta: actionResolvers.CreateManyWp_postmetaResolver,
    createOneWp_postmeta: actionResolvers.CreateOneWp_postmetaResolver,
    deleteManyWp_postmeta: actionResolvers.DeleteManyWp_postmetaResolver,
    deleteOneWp_postmeta: actionResolvers.DeleteOneWp_postmetaResolver,
    findFirstWp_postmeta: actionResolvers.FindFirstWp_postmetaResolver,
    findFirstWp_postmetaOrThrow: actionResolvers.FindFirstWp_postmetaOrThrowResolver,
    wp_postmetas: actionResolvers.FindManyWp_postmetaResolver,
    wp_postmeta: actionResolvers.FindUniqueWp_postmetaResolver,
    getWp_postmeta: actionResolvers.FindUniqueWp_postmetaOrThrowResolver,
    groupByWp_postmeta: actionResolvers.GroupByWp_postmetaResolver,
    updateManyWp_postmeta: actionResolvers.UpdateManyWp_postmetaResolver,
    updateOneWp_postmeta: actionResolvers.UpdateOneWp_postmetaResolver,
    upsertOneWp_postmeta: actionResolvers.UpsertOneWp_postmetaResolver
  },
  Wp_posts: {
    aggregateWp_posts: actionResolvers.AggregateWp_postsResolver,
    createManyWp_posts: actionResolvers.CreateManyWp_postsResolver,
    createOneWp_posts: actionResolvers.CreateOneWp_postsResolver,
    deleteManyWp_posts: actionResolvers.DeleteManyWp_postsResolver,
    deleteOneWp_posts: actionResolvers.DeleteOneWp_postsResolver,
    findFirstWp_posts: actionResolvers.FindFirstWp_postsResolver,
    findFirstWp_postsOrThrow: actionResolvers.FindFirstWp_postsOrThrowResolver,
    findManyWp_posts: actionResolvers.FindManyWp_postsResolver,
    findUniqueWp_posts: actionResolvers.FindUniqueWp_postsResolver,
    findUniqueWp_postsOrThrow: actionResolvers.FindUniqueWp_postsOrThrowResolver,
    groupByWp_posts: actionResolvers.GroupByWp_postsResolver,
    updateManyWp_posts: actionResolvers.UpdateManyWp_postsResolver,
    updateOneWp_posts: actionResolvers.UpdateOneWp_postsResolver,
    upsertOneWp_posts: actionResolvers.UpsertOneWp_postsResolver
  },
  Wp_term_relationships: {
    aggregateWp_term_relationships: actionResolvers.AggregateWp_term_relationshipsResolver,
    createManyWp_term_relationships: actionResolvers.CreateManyWp_term_relationshipsResolver,
    createOneWp_term_relationships: actionResolvers.CreateOneWp_term_relationshipsResolver,
    deleteManyWp_term_relationships: actionResolvers.DeleteManyWp_term_relationshipsResolver,
    deleteOneWp_term_relationships: actionResolvers.DeleteOneWp_term_relationshipsResolver,
    findFirstWp_term_relationships: actionResolvers.FindFirstWp_term_relationshipsResolver,
    findFirstWp_term_relationshipsOrThrow: actionResolvers.FindFirstWp_term_relationshipsOrThrowResolver,
    findManyWp_term_relationships: actionResolvers.FindManyWp_term_relationshipsResolver,
    findUniqueWp_term_relationships: actionResolvers.FindUniqueWp_term_relationshipsResolver,
    findUniqueWp_term_relationshipsOrThrow: actionResolvers.FindUniqueWp_term_relationshipsOrThrowResolver,
    groupByWp_term_relationships: actionResolvers.GroupByWp_term_relationshipsResolver,
    updateManyWp_term_relationships: actionResolvers.UpdateManyWp_term_relationshipsResolver,
    updateOneWp_term_relationships: actionResolvers.UpdateOneWp_term_relationshipsResolver,
    upsertOneWp_term_relationships: actionResolvers.UpsertOneWp_term_relationshipsResolver
  },
  Wp_term_taxonomy: {
    aggregateWp_term_taxonomy: actionResolvers.AggregateWp_term_taxonomyResolver,
    createManyWp_term_taxonomy: actionResolvers.CreateManyWp_term_taxonomyResolver,
    createOneWp_term_taxonomy: actionResolvers.CreateOneWp_term_taxonomyResolver,
    deleteManyWp_term_taxonomy: actionResolvers.DeleteManyWp_term_taxonomyResolver,
    deleteOneWp_term_taxonomy: actionResolvers.DeleteOneWp_term_taxonomyResolver,
    findFirstWp_term_taxonomy: actionResolvers.FindFirstWp_term_taxonomyResolver,
    findFirstWp_term_taxonomyOrThrow: actionResolvers.FindFirstWp_term_taxonomyOrThrowResolver,
    wp_term_taxonomies: actionResolvers.FindManyWp_term_taxonomyResolver,
    wp_term_taxonomy: actionResolvers.FindUniqueWp_term_taxonomyResolver,
    getWp_term_taxonomy: actionResolvers.FindUniqueWp_term_taxonomyOrThrowResolver,
    groupByWp_term_taxonomy: actionResolvers.GroupByWp_term_taxonomyResolver,
    updateManyWp_term_taxonomy: actionResolvers.UpdateManyWp_term_taxonomyResolver,
    updateOneWp_term_taxonomy: actionResolvers.UpdateOneWp_term_taxonomyResolver,
    upsertOneWp_term_taxonomy: actionResolvers.UpsertOneWp_term_taxonomyResolver
  },
  Wp_termmeta: {
    aggregateWp_termmeta: actionResolvers.AggregateWp_termmetaResolver,
    createManyWp_termmeta: actionResolvers.CreateManyWp_termmetaResolver,
    createOneWp_termmeta: actionResolvers.CreateOneWp_termmetaResolver,
    deleteManyWp_termmeta: actionResolvers.DeleteManyWp_termmetaResolver,
    deleteOneWp_termmeta: actionResolvers.DeleteOneWp_termmetaResolver,
    findFirstWp_termmeta: actionResolvers.FindFirstWp_termmetaResolver,
    findFirstWp_termmetaOrThrow: actionResolvers.FindFirstWp_termmetaOrThrowResolver,
    wp_termmetas: actionResolvers.FindManyWp_termmetaResolver,
    wp_termmeta: actionResolvers.FindUniqueWp_termmetaResolver,
    getWp_termmeta: actionResolvers.FindUniqueWp_termmetaOrThrowResolver,
    groupByWp_termmeta: actionResolvers.GroupByWp_termmetaResolver,
    updateManyWp_termmeta: actionResolvers.UpdateManyWp_termmetaResolver,
    updateOneWp_termmeta: actionResolvers.UpdateOneWp_termmetaResolver,
    upsertOneWp_termmeta: actionResolvers.UpsertOneWp_termmetaResolver
  },
  Wp_terms: {
    aggregateWp_terms: actionResolvers.AggregateWp_termsResolver,
    createManyWp_terms: actionResolvers.CreateManyWp_termsResolver,
    createOneWp_terms: actionResolvers.CreateOneWp_termsResolver,
    deleteManyWp_terms: actionResolvers.DeleteManyWp_termsResolver,
    deleteOneWp_terms: actionResolvers.DeleteOneWp_termsResolver,
    findFirstWp_terms: actionResolvers.FindFirstWp_termsResolver,
    findFirstWp_termsOrThrow: actionResolvers.FindFirstWp_termsOrThrowResolver,
    findManyWp_terms: actionResolvers.FindManyWp_termsResolver,
    findUniqueWp_terms: actionResolvers.FindUniqueWp_termsResolver,
    findUniqueWp_termsOrThrow: actionResolvers.FindUniqueWp_termsOrThrowResolver,
    groupByWp_terms: actionResolvers.GroupByWp_termsResolver,
    updateManyWp_terms: actionResolvers.UpdateManyWp_termsResolver,
    updateOneWp_terms: actionResolvers.UpdateOneWp_termsResolver,
    upsertOneWp_terms: actionResolvers.UpsertOneWp_termsResolver
  },
  Wp_usermeta: {
    aggregateWp_usermeta: actionResolvers.AggregateWp_usermetaResolver,
    createManyWp_usermeta: actionResolvers.CreateManyWp_usermetaResolver,
    createOneWp_usermeta: actionResolvers.CreateOneWp_usermetaResolver,
    deleteManyWp_usermeta: actionResolvers.DeleteManyWp_usermetaResolver,
    deleteOneWp_usermeta: actionResolvers.DeleteOneWp_usermetaResolver,
    findFirstWp_usermeta: actionResolvers.FindFirstWp_usermetaResolver,
    findFirstWp_usermetaOrThrow: actionResolvers.FindFirstWp_usermetaOrThrowResolver,
    wp_usermetas: actionResolvers.FindManyWp_usermetaResolver,
    wp_usermeta: actionResolvers.FindUniqueWp_usermetaResolver,
    getWp_usermeta: actionResolvers.FindUniqueWp_usermetaOrThrowResolver,
    groupByWp_usermeta: actionResolvers.GroupByWp_usermetaResolver,
    updateManyWp_usermeta: actionResolvers.UpdateManyWp_usermetaResolver,
    updateOneWp_usermeta: actionResolvers.UpdateOneWp_usermetaResolver,
    upsertOneWp_usermeta: actionResolvers.UpsertOneWp_usermetaResolver
  },
  Wp_users: {
    aggregateWp_users: actionResolvers.AggregateWp_usersResolver,
    createManyWp_users: actionResolvers.CreateManyWp_usersResolver,
    createOneWp_users: actionResolvers.CreateOneWp_usersResolver,
    deleteManyWp_users: actionResolvers.DeleteManyWp_usersResolver,
    deleteOneWp_users: actionResolvers.DeleteOneWp_usersResolver,
    findFirstWp_users: actionResolvers.FindFirstWp_usersResolver,
    findFirstWp_usersOrThrow: actionResolvers.FindFirstWp_usersOrThrowResolver,
    findManyWp_users: actionResolvers.FindManyWp_usersResolver,
    findUniqueWp_users: actionResolvers.FindUniqueWp_usersResolver,
    findUniqueWp_usersOrThrow: actionResolvers.FindUniqueWp_usersOrThrowResolver,
    groupByWp_users: actionResolvers.GroupByWp_usersResolver,
    updateManyWp_users: actionResolvers.UpdateManyWp_usersResolver,
    updateOneWp_users: actionResolvers.UpdateOneWp_usersResolver,
    upsertOneWp_users: actionResolvers.UpsertOneWp_usersResolver
  }
};
const crudResolversInfo = {
  Wp_commentmeta: ["aggregateWp_commentmeta", "createManyWp_commentmeta", "createOneWp_commentmeta", "deleteManyWp_commentmeta", "deleteOneWp_commentmeta", "findFirstWp_commentmeta", "findFirstWp_commentmetaOrThrow", "wp_commentmetas", "wp_commentmeta", "getWp_commentmeta", "groupByWp_commentmeta", "updateManyWp_commentmeta", "updateOneWp_commentmeta", "upsertOneWp_commentmeta"],
  Wp_comments: ["aggregateWp_comments", "createManyWp_comments", "createOneWp_comments", "deleteManyWp_comments", "deleteOneWp_comments", "findFirstWp_comments", "findFirstWp_commentsOrThrow", "findManyWp_comments", "findUniqueWp_comments", "findUniqueWp_commentsOrThrow", "groupByWp_comments", "updateManyWp_comments", "updateOneWp_comments", "upsertOneWp_comments"],
  Wp_links: ["aggregateWp_links", "createManyWp_links", "createOneWp_links", "deleteManyWp_links", "deleteOneWp_links", "findFirstWp_links", "findFirstWp_linksOrThrow", "findManyWp_links", "findUniqueWp_links", "findUniqueWp_linksOrThrow", "groupByWp_links", "updateManyWp_links", "updateOneWp_links", "upsertOneWp_links"],
  Wp_options: ["aggregateWp_options", "createManyWp_options", "createOneWp_options", "deleteManyWp_options", "deleteOneWp_options", "findFirstWp_options", "findFirstWp_optionsOrThrow", "findManyWp_options", "findUniqueWp_options", "findUniqueWp_optionsOrThrow", "groupByWp_options", "updateManyWp_options", "updateOneWp_options", "upsertOneWp_options"],
  Wp_postmeta: ["aggregateWp_postmeta", "createManyWp_postmeta", "createOneWp_postmeta", "deleteManyWp_postmeta", "deleteOneWp_postmeta", "findFirstWp_postmeta", "findFirstWp_postmetaOrThrow", "wp_postmetas", "wp_postmeta", "getWp_postmeta", "groupByWp_postmeta", "updateManyWp_postmeta", "updateOneWp_postmeta", "upsertOneWp_postmeta"],
  Wp_posts: ["aggregateWp_posts", "createManyWp_posts", "createOneWp_posts", "deleteManyWp_posts", "deleteOneWp_posts", "findFirstWp_posts", "findFirstWp_postsOrThrow", "findManyWp_posts", "findUniqueWp_posts", "findUniqueWp_postsOrThrow", "groupByWp_posts", "updateManyWp_posts", "updateOneWp_posts", "upsertOneWp_posts"],
  Wp_term_relationships: ["aggregateWp_term_relationships", "createManyWp_term_relationships", "createOneWp_term_relationships", "deleteManyWp_term_relationships", "deleteOneWp_term_relationships", "findFirstWp_term_relationships", "findFirstWp_term_relationshipsOrThrow", "findManyWp_term_relationships", "findUniqueWp_term_relationships", "findUniqueWp_term_relationshipsOrThrow", "groupByWp_term_relationships", "updateManyWp_term_relationships", "updateOneWp_term_relationships", "upsertOneWp_term_relationships"],
  Wp_term_taxonomy: ["aggregateWp_term_taxonomy", "createManyWp_term_taxonomy", "createOneWp_term_taxonomy", "deleteManyWp_term_taxonomy", "deleteOneWp_term_taxonomy", "findFirstWp_term_taxonomy", "findFirstWp_term_taxonomyOrThrow", "wp_term_taxonomies", "wp_term_taxonomy", "getWp_term_taxonomy", "groupByWp_term_taxonomy", "updateManyWp_term_taxonomy", "updateOneWp_term_taxonomy", "upsertOneWp_term_taxonomy"],
  Wp_termmeta: ["aggregateWp_termmeta", "createManyWp_termmeta", "createOneWp_termmeta", "deleteManyWp_termmeta", "deleteOneWp_termmeta", "findFirstWp_termmeta", "findFirstWp_termmetaOrThrow", "wp_termmetas", "wp_termmeta", "getWp_termmeta", "groupByWp_termmeta", "updateManyWp_termmeta", "updateOneWp_termmeta", "upsertOneWp_termmeta"],
  Wp_terms: ["aggregateWp_terms", "createManyWp_terms", "createOneWp_terms", "deleteManyWp_terms", "deleteOneWp_terms", "findFirstWp_terms", "findFirstWp_termsOrThrow", "findManyWp_terms", "findUniqueWp_terms", "findUniqueWp_termsOrThrow", "groupByWp_terms", "updateManyWp_terms", "updateOneWp_terms", "upsertOneWp_terms"],
  Wp_usermeta: ["aggregateWp_usermeta", "createManyWp_usermeta", "createOneWp_usermeta", "deleteManyWp_usermeta", "deleteOneWp_usermeta", "findFirstWp_usermeta", "findFirstWp_usermetaOrThrow", "wp_usermetas", "wp_usermeta", "getWp_usermeta", "groupByWp_usermeta", "updateManyWp_usermeta", "updateOneWp_usermeta", "upsertOneWp_usermeta"],
  Wp_users: ["aggregateWp_users", "createManyWp_users", "createOneWp_users", "deleteManyWp_users", "deleteOneWp_users", "findFirstWp_users", "findFirstWp_usersOrThrow", "findManyWp_users", "findUniqueWp_users", "findUniqueWp_usersOrThrow", "groupByWp_users", "updateManyWp_users", "updateOneWp_users", "upsertOneWp_users"]
};
const argsInfo = {
  AggregateWp_commentmetaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_commentmetaArgs: ["data", "skipDuplicates"],
  CreateOneWp_commentmetaArgs: ["data"],
  DeleteManyWp_commentmetaArgs: ["where"],
  DeleteOneWp_commentmetaArgs: ["where"],
  FindFirstWp_commentmetaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_commentmetaOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_commentmetaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_commentmetaArgs: ["where"],
  FindUniqueWp_commentmetaOrThrowArgs: ["where"],
  GroupByWp_commentmetaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_commentmetaArgs: ["data", "where"],
  UpdateOneWp_commentmetaArgs: ["data", "where"],
  UpsertOneWp_commentmetaArgs: ["where", "create", "update"],
  AggregateWp_commentsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_commentsArgs: ["data", "skipDuplicates"],
  CreateOneWp_commentsArgs: ["data"],
  DeleteManyWp_commentsArgs: ["where"],
  DeleteOneWp_commentsArgs: ["where"],
  FindFirstWp_commentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_commentsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_commentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_commentsArgs: ["where"],
  FindUniqueWp_commentsOrThrowArgs: ["where"],
  GroupByWp_commentsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_commentsArgs: ["data", "where"],
  UpdateOneWp_commentsArgs: ["data", "where"],
  UpsertOneWp_commentsArgs: ["where", "create", "update"],
  AggregateWp_linksArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_linksArgs: ["data", "skipDuplicates"],
  CreateOneWp_linksArgs: ["data"],
  DeleteManyWp_linksArgs: ["where"],
  DeleteOneWp_linksArgs: ["where"],
  FindFirstWp_linksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_linksOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_linksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_linksArgs: ["where"],
  FindUniqueWp_linksOrThrowArgs: ["where"],
  GroupByWp_linksArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_linksArgs: ["data", "where"],
  UpdateOneWp_linksArgs: ["data", "where"],
  UpsertOneWp_linksArgs: ["where", "create", "update"],
  AggregateWp_optionsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_optionsArgs: ["data", "skipDuplicates"],
  CreateOneWp_optionsArgs: ["data"],
  DeleteManyWp_optionsArgs: ["where"],
  DeleteOneWp_optionsArgs: ["where"],
  FindFirstWp_optionsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_optionsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_optionsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_optionsArgs: ["where"],
  FindUniqueWp_optionsOrThrowArgs: ["where"],
  GroupByWp_optionsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_optionsArgs: ["data", "where"],
  UpdateOneWp_optionsArgs: ["data", "where"],
  UpsertOneWp_optionsArgs: ["where", "create", "update"],
  AggregateWp_postmetaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_postmetaArgs: ["data", "skipDuplicates"],
  CreateOneWp_postmetaArgs: ["data"],
  DeleteManyWp_postmetaArgs: ["where"],
  DeleteOneWp_postmetaArgs: ["where"],
  FindFirstWp_postmetaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_postmetaOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_postmetaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_postmetaArgs: ["where"],
  FindUniqueWp_postmetaOrThrowArgs: ["where"],
  GroupByWp_postmetaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_postmetaArgs: ["data", "where"],
  UpdateOneWp_postmetaArgs: ["data", "where"],
  UpsertOneWp_postmetaArgs: ["where", "create", "update"],
  AggregateWp_postsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_postsArgs: ["data", "skipDuplicates"],
  CreateOneWp_postsArgs: ["data"],
  DeleteManyWp_postsArgs: ["where"],
  DeleteOneWp_postsArgs: ["where"],
  FindFirstWp_postsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_postsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_postsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_postsArgs: ["where"],
  FindUniqueWp_postsOrThrowArgs: ["where"],
  GroupByWp_postsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_postsArgs: ["data", "where"],
  UpdateOneWp_postsArgs: ["data", "where"],
  UpsertOneWp_postsArgs: ["where", "create", "update"],
  AggregateWp_term_relationshipsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_term_relationshipsArgs: ["data", "skipDuplicates"],
  CreateOneWp_term_relationshipsArgs: ["data"],
  DeleteManyWp_term_relationshipsArgs: ["where"],
  DeleteOneWp_term_relationshipsArgs: ["where"],
  FindFirstWp_term_relationshipsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_term_relationshipsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_term_relationshipsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_term_relationshipsArgs: ["where"],
  FindUniqueWp_term_relationshipsOrThrowArgs: ["where"],
  GroupByWp_term_relationshipsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_term_relationshipsArgs: ["data", "where"],
  UpdateOneWp_term_relationshipsArgs: ["data", "where"],
  UpsertOneWp_term_relationshipsArgs: ["where", "create", "update"],
  AggregateWp_term_taxonomyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_term_taxonomyArgs: ["data", "skipDuplicates"],
  CreateOneWp_term_taxonomyArgs: ["data"],
  DeleteManyWp_term_taxonomyArgs: ["where"],
  DeleteOneWp_term_taxonomyArgs: ["where"],
  FindFirstWp_term_taxonomyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_term_taxonomyOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_term_taxonomyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_term_taxonomyArgs: ["where"],
  FindUniqueWp_term_taxonomyOrThrowArgs: ["where"],
  GroupByWp_term_taxonomyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_term_taxonomyArgs: ["data", "where"],
  UpdateOneWp_term_taxonomyArgs: ["data", "where"],
  UpsertOneWp_term_taxonomyArgs: ["where", "create", "update"],
  AggregateWp_termmetaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_termmetaArgs: ["data", "skipDuplicates"],
  CreateOneWp_termmetaArgs: ["data"],
  DeleteManyWp_termmetaArgs: ["where"],
  DeleteOneWp_termmetaArgs: ["where"],
  FindFirstWp_termmetaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_termmetaOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_termmetaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_termmetaArgs: ["where"],
  FindUniqueWp_termmetaOrThrowArgs: ["where"],
  GroupByWp_termmetaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_termmetaArgs: ["data", "where"],
  UpdateOneWp_termmetaArgs: ["data", "where"],
  UpsertOneWp_termmetaArgs: ["where", "create", "update"],
  AggregateWp_termsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_termsArgs: ["data", "skipDuplicates"],
  CreateOneWp_termsArgs: ["data"],
  DeleteManyWp_termsArgs: ["where"],
  DeleteOneWp_termsArgs: ["where"],
  FindFirstWp_termsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_termsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_termsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_termsArgs: ["where"],
  FindUniqueWp_termsOrThrowArgs: ["where"],
  GroupByWp_termsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_termsArgs: ["data", "where"],
  UpdateOneWp_termsArgs: ["data", "where"],
  UpsertOneWp_termsArgs: ["where", "create", "update"],
  AggregateWp_usermetaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_usermetaArgs: ["data", "skipDuplicates"],
  CreateOneWp_usermetaArgs: ["data"],
  DeleteManyWp_usermetaArgs: ["where"],
  DeleteOneWp_usermetaArgs: ["where"],
  FindFirstWp_usermetaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_usermetaOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_usermetaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_usermetaArgs: ["where"],
  FindUniqueWp_usermetaOrThrowArgs: ["where"],
  GroupByWp_usermetaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_usermetaArgs: ["data", "where"],
  UpdateOneWp_usermetaArgs: ["data", "where"],
  UpsertOneWp_usermetaArgs: ["where", "create", "update"],
  AggregateWp_usersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWp_usersArgs: ["data", "skipDuplicates"],
  CreateOneWp_usersArgs: ["data"],
  DeleteManyWp_usersArgs: ["where"],
  DeleteOneWp_usersArgs: ["where"],
  FindFirstWp_usersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWp_usersOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWp_usersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWp_usersArgs: ["where"],
  FindUniqueWp_usersOrThrowArgs: ["where"],
  GroupByWp_usersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWp_usersArgs: ["data", "where"],
  UpdateOneWp_usersArgs: ["data", "where"],
  UpsertOneWp_usersArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Wp_commentmeta: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_comments: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_links: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_options: ["option_id", "option_name", "option_value", "autoload"],
  Wp_postmeta: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_posts: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_term_relationships: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_taxonomy: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_termmeta: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_terms: ["term_id", "name", "slug", "term_group"],
  Wp_usermeta: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_users: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateWp_commentmeta: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_commentmetaGroupBy: ["meta_id", "comment_id", "meta_key", "meta_value", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_comments: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_commentsGroupBy: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_links: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_linksGroupBy: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_options: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_optionsGroupBy: ["option_id", "option_name", "option_value", "autoload", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_postmeta: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_postmetaGroupBy: ["meta_id", "post_id", "meta_key", "meta_value", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_posts: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_postsGroupBy: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_term_relationships: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_term_relationshipsGroupBy: ["object_id", "term_taxonomy_id", "term_order", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_term_taxonomy: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_term_taxonomyGroupBy: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_termmeta: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_termmetaGroupBy: ["meta_id", "term_id", "meta_key", "meta_value", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_terms: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_termsGroupBy: ["term_id", "name", "slug", "term_group", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_usermeta: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_usermetaGroupBy: ["umeta_id", "user_id", "meta_key", "meta_value", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWp_users: ["_count", "_avg", "_sum", "_min", "_max"],
  Wp_usersGroupBy: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  Wp_commentmetaCountAggregate: ["meta_id", "comment_id", "meta_key", "meta_value", "_all"],
  Wp_commentmetaAvgAggregate: ["meta_id", "comment_id"],
  Wp_commentmetaSumAggregate: ["meta_id", "comment_id"],
  Wp_commentmetaMinAggregate: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentmetaMaxAggregate: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentsCountAggregate: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id", "_all"],
  Wp_commentsAvgAggregate: ["comment_ID", "comment_post_ID", "comment_karma", "comment_parent", "user_id"],
  Wp_commentsSumAggregate: ["comment_ID", "comment_post_ID", "comment_karma", "comment_parent", "user_id"],
  Wp_commentsMinAggregate: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_commentsMaxAggregate: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_linksCountAggregate: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss", "_all"],
  Wp_linksAvgAggregate: ["link_id", "link_owner", "link_rating"],
  Wp_linksSumAggregate: ["link_id", "link_owner", "link_rating"],
  Wp_linksMinAggregate: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_linksMaxAggregate: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_optionsCountAggregate: ["option_id", "option_name", "option_value", "autoload", "_all"],
  Wp_optionsAvgAggregate: ["option_id"],
  Wp_optionsSumAggregate: ["option_id"],
  Wp_optionsMinAggregate: ["option_id", "option_name", "option_value", "autoload"],
  Wp_optionsMaxAggregate: ["option_id", "option_name", "option_value", "autoload"],
  Wp_postmetaCountAggregate: ["meta_id", "post_id", "meta_key", "meta_value", "_all"],
  Wp_postmetaAvgAggregate: ["meta_id", "post_id"],
  Wp_postmetaSumAggregate: ["meta_id", "post_id"],
  Wp_postmetaMinAggregate: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postmetaMaxAggregate: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postsCountAggregate: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count", "_all"],
  Wp_postsAvgAggregate: ["ID", "post_author", "post_parent", "menu_order", "comment_count"],
  Wp_postsSumAggregate: ["ID", "post_author", "post_parent", "menu_order", "comment_count"],
  Wp_postsMinAggregate: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_postsMaxAggregate: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_term_relationshipsCountAggregate: ["object_id", "term_taxonomy_id", "term_order", "_all"],
  Wp_term_relationshipsAvgAggregate: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsSumAggregate: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsMinAggregate: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsMaxAggregate: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_taxonomyCountAggregate: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count", "_all"],
  Wp_term_taxonomyAvgAggregate: ["term_taxonomy_id", "term_id", "parent", "count"],
  Wp_term_taxonomySumAggregate: ["term_taxonomy_id", "term_id", "parent", "count"],
  Wp_term_taxonomyMinAggregate: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_term_taxonomyMaxAggregate: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_termmetaCountAggregate: ["meta_id", "term_id", "meta_key", "meta_value", "_all"],
  Wp_termmetaAvgAggregate: ["meta_id", "term_id"],
  Wp_termmetaSumAggregate: ["meta_id", "term_id"],
  Wp_termmetaMinAggregate: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termmetaMaxAggregate: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termsCountAggregate: ["term_id", "name", "slug", "term_group", "_all"],
  Wp_termsAvgAggregate: ["term_id", "term_group"],
  Wp_termsSumAggregate: ["term_id", "term_group"],
  Wp_termsMinAggregate: ["term_id", "name", "slug", "term_group"],
  Wp_termsMaxAggregate: ["term_id", "name", "slug", "term_group"],
  Wp_usermetaCountAggregate: ["umeta_id", "user_id", "meta_key", "meta_value", "_all"],
  Wp_usermetaAvgAggregate: ["umeta_id", "user_id"],
  Wp_usermetaSumAggregate: ["umeta_id", "user_id"],
  Wp_usermetaMinAggregate: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usermetaMaxAggregate: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usersCountAggregate: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name", "_all"],
  Wp_usersAvgAggregate: ["ID", "user_status"],
  Wp_usersSumAggregate: ["ID", "user_status"],
  Wp_usersMinAggregate: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_usersMaxAggregate: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  Wp_commentmetaWhereInput: ["AND", "OR", "NOT", "meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentmetaOrderByWithRelationInput: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentmetaWhereUniqueInput: ["meta_id", "AND", "OR", "NOT", "comment_id", "meta_key", "meta_value"],
  Wp_commentmetaOrderByWithAggregationInput: ["meta_id", "comment_id", "meta_key", "meta_value", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_commentmetaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentsWhereInput: ["AND", "OR", "NOT", "comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_commentsOrderByWithRelationInput: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_commentsWhereUniqueInput: ["comment_ID", "AND", "OR", "NOT", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_commentsOrderByWithAggregationInput: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_commentsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_linksWhereInput: ["AND", "OR", "NOT", "link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_linksOrderByWithRelationInput: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_linksWhereUniqueInput: ["link_id", "AND", "OR", "NOT", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_linksOrderByWithAggregationInput: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_linksScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_optionsWhereInput: ["AND", "OR", "NOT", "option_id", "option_name", "option_value", "autoload"],
  Wp_optionsOrderByWithRelationInput: ["option_id", "option_name", "option_value", "autoload"],
  Wp_optionsWhereUniqueInput: ["option_id", "option_name", "AND", "OR", "NOT", "option_value", "autoload"],
  Wp_optionsOrderByWithAggregationInput: ["option_id", "option_name", "option_value", "autoload", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_optionsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "option_id", "option_name", "option_value", "autoload"],
  Wp_postmetaWhereInput: ["AND", "OR", "NOT", "meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postmetaOrderByWithRelationInput: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postmetaWhereUniqueInput: ["meta_id", "AND", "OR", "NOT", "post_id", "meta_key", "meta_value"],
  Wp_postmetaOrderByWithAggregationInput: ["meta_id", "post_id", "meta_key", "meta_value", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_postmetaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postsWhereInput: ["AND", "OR", "NOT", "ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_postsOrderByWithRelationInput: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_postsWhereUniqueInput: ["ID", "AND", "OR", "NOT", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_postsOrderByWithAggregationInput: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_postsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_term_relationshipsWhereInput: ["AND", "OR", "NOT", "object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsOrderByWithRelationInput: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsWhereUniqueInput: ["object_id_term_taxonomy_id", "AND", "OR", "NOT", "object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsOrderByWithAggregationInput: ["object_id", "term_taxonomy_id", "term_order", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_term_relationshipsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "object_id", "term_taxonomy_id", "term_order"],
  Wp_term_taxonomyWhereInput: ["AND", "OR", "NOT", "term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_term_taxonomyOrderByWithRelationInput: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_term_taxonomyWhereUniqueInput: ["term_taxonomy_id", "term_id_taxonomy", "AND", "OR", "NOT", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_term_taxonomyOrderByWithAggregationInput: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_term_taxonomyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_termmetaWhereInput: ["AND", "OR", "NOT", "meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termmetaOrderByWithRelationInput: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termmetaWhereUniqueInput: ["meta_id", "AND", "OR", "NOT", "term_id", "meta_key", "meta_value"],
  Wp_termmetaOrderByWithAggregationInput: ["meta_id", "term_id", "meta_key", "meta_value", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_termmetaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termsWhereInput: ["AND", "OR", "NOT", "term_id", "name", "slug", "term_group"],
  Wp_termsOrderByWithRelationInput: ["term_id", "name", "slug", "term_group"],
  Wp_termsWhereUniqueInput: ["term_id", "AND", "OR", "NOT", "name", "slug", "term_group"],
  Wp_termsOrderByWithAggregationInput: ["term_id", "name", "slug", "term_group", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_termsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "term_id", "name", "slug", "term_group"],
  Wp_usermetaWhereInput: ["AND", "OR", "NOT", "umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usermetaOrderByWithRelationInput: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usermetaWhereUniqueInput: ["umeta_id", "AND", "OR", "NOT", "user_id", "meta_key", "meta_value"],
  Wp_usermetaOrderByWithAggregationInput: ["umeta_id", "user_id", "meta_key", "meta_value", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_usermetaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usersWhereInput: ["AND", "OR", "NOT", "ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_usersOrderByWithRelationInput: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_usersWhereUniqueInput: ["ID", "AND", "OR", "NOT", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_usersOrderByWithAggregationInput: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name", "_count", "_avg", "_max", "_min", "_sum"],
  Wp_usersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_commentmetaCreateInput: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentmetaUpdateInput: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentmetaCreateManyInput: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentmetaUpdateManyMutationInput: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentsCreateInput: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_commentsUpdateInput: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_commentsCreateManyInput: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_commentsUpdateManyMutationInput: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_linksCreateInput: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_linksUpdateInput: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_linksCreateManyInput: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_linksUpdateManyMutationInput: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_optionsCreateInput: ["option_id", "option_name", "option_value", "autoload"],
  Wp_optionsUpdateInput: ["option_id", "option_name", "option_value", "autoload"],
  Wp_optionsCreateManyInput: ["option_id", "option_name", "option_value", "autoload"],
  Wp_optionsUpdateManyMutationInput: ["option_id", "option_name", "option_value", "autoload"],
  Wp_postmetaCreateInput: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postmetaUpdateInput: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postmetaCreateManyInput: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postmetaUpdateManyMutationInput: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postsCreateInput: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_postsUpdateInput: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_postsCreateManyInput: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_postsUpdateManyMutationInput: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_term_relationshipsCreateInput: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsUpdateInput: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsCreateManyInput: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsUpdateManyMutationInput: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_taxonomyCreateInput: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_term_taxonomyUpdateInput: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_term_taxonomyCreateManyInput: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_term_taxonomyUpdateManyMutationInput: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_termmetaCreateInput: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termmetaUpdateInput: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termmetaCreateManyInput: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termmetaUpdateManyMutationInput: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termsCreateInput: ["term_id", "name", "slug", "term_group"],
  Wp_termsUpdateInput: ["term_id", "name", "slug", "term_group"],
  Wp_termsCreateManyInput: ["term_id", "name", "slug", "term_group"],
  Wp_termsUpdateManyMutationInput: ["term_id", "name", "slug", "term_group"],
  Wp_usermetaCreateInput: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usermetaUpdateInput: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usermetaCreateManyInput: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usermetaUpdateManyMutationInput: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usersCreateInput: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_usersUpdateInput: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_usersCreateManyInput: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_usersUpdateManyMutationInput: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  BigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  SortOrderInput: ["sort", "nulls"],
  Wp_commentmetaCountOrderByAggregateInput: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentmetaAvgOrderByAggregateInput: ["meta_id", "comment_id"],
  Wp_commentmetaMaxOrderByAggregateInput: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentmetaMinOrderByAggregateInput: ["meta_id", "comment_id", "meta_key", "meta_value"],
  Wp_commentmetaSumOrderByAggregateInput: ["meta_id", "comment_id"],
  BigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  Wp_commentsCountOrderByAggregateInput: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_commentsAvgOrderByAggregateInput: ["comment_ID", "comment_post_ID", "comment_karma", "comment_parent", "user_id"],
  Wp_commentsMaxOrderByAggregateInput: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_commentsMinOrderByAggregateInput: ["comment_ID", "comment_post_ID", "comment_author", "comment_author_email", "comment_author_url", "comment_author_IP", "comment_date", "comment_date_gmt", "comment_content", "comment_karma", "comment_approved", "comment_agent", "comment_type", "comment_parent", "user_id"],
  Wp_commentsSumOrderByAggregateInput: ["comment_ID", "comment_post_ID", "comment_karma", "comment_parent", "user_id"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  Wp_linksCountOrderByAggregateInput: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_linksAvgOrderByAggregateInput: ["link_id", "link_owner", "link_rating"],
  Wp_linksMaxOrderByAggregateInput: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_linksMinOrderByAggregateInput: ["link_id", "link_url", "link_name", "link_image", "link_target", "link_description", "link_visible", "link_owner", "link_rating", "link_updated", "link_rel", "link_notes", "link_rss"],
  Wp_linksSumOrderByAggregateInput: ["link_id", "link_owner", "link_rating"],
  Wp_optionsCountOrderByAggregateInput: ["option_id", "option_name", "option_value", "autoload"],
  Wp_optionsAvgOrderByAggregateInput: ["option_id"],
  Wp_optionsMaxOrderByAggregateInput: ["option_id", "option_name", "option_value", "autoload"],
  Wp_optionsMinOrderByAggregateInput: ["option_id", "option_name", "option_value", "autoload"],
  Wp_optionsSumOrderByAggregateInput: ["option_id"],
  Wp_postmetaCountOrderByAggregateInput: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postmetaAvgOrderByAggregateInput: ["meta_id", "post_id"],
  Wp_postmetaMaxOrderByAggregateInput: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postmetaMinOrderByAggregateInput: ["meta_id", "post_id", "meta_key", "meta_value"],
  Wp_postmetaSumOrderByAggregateInput: ["meta_id", "post_id"],
  Wp_postsCountOrderByAggregateInput: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_postsAvgOrderByAggregateInput: ["ID", "post_author", "post_parent", "menu_order", "comment_count"],
  Wp_postsMaxOrderByAggregateInput: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_postsMinOrderByAggregateInput: ["ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title", "post_excerpt", "post_status", "comment_status", "ping_status", "post_password", "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt", "post_content_filtered", "post_parent", "guid", "menu_order", "post_type", "post_mime_type", "comment_count"],
  Wp_postsSumOrderByAggregateInput: ["ID", "post_author", "post_parent", "menu_order", "comment_count"],
  wp_term_relationshipsObject_idTerm_taxonomy_idCompoundUniqueInput: ["object_id", "term_taxonomy_id"],
  Wp_term_relationshipsCountOrderByAggregateInput: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsAvgOrderByAggregateInput: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsMaxOrderByAggregateInput: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsMinOrderByAggregateInput: ["object_id", "term_taxonomy_id", "term_order"],
  Wp_term_relationshipsSumOrderByAggregateInput: ["object_id", "term_taxonomy_id", "term_order"],
  wp_term_taxonomyTerm_idTaxonomyCompoundUniqueInput: ["term_id", "taxonomy"],
  Wp_term_taxonomyCountOrderByAggregateInput: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_term_taxonomyAvgOrderByAggregateInput: ["term_taxonomy_id", "term_id", "parent", "count"],
  Wp_term_taxonomyMaxOrderByAggregateInput: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_term_taxonomyMinOrderByAggregateInput: ["term_taxonomy_id", "term_id", "taxonomy", "description", "parent", "count"],
  Wp_term_taxonomySumOrderByAggregateInput: ["term_taxonomy_id", "term_id", "parent", "count"],
  Wp_termmetaCountOrderByAggregateInput: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termmetaAvgOrderByAggregateInput: ["meta_id", "term_id"],
  Wp_termmetaMaxOrderByAggregateInput: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termmetaMinOrderByAggregateInput: ["meta_id", "term_id", "meta_key", "meta_value"],
  Wp_termmetaSumOrderByAggregateInput: ["meta_id", "term_id"],
  Wp_termsCountOrderByAggregateInput: ["term_id", "name", "slug", "term_group"],
  Wp_termsAvgOrderByAggregateInput: ["term_id", "term_group"],
  Wp_termsMaxOrderByAggregateInput: ["term_id", "name", "slug", "term_group"],
  Wp_termsMinOrderByAggregateInput: ["term_id", "name", "slug", "term_group"],
  Wp_termsSumOrderByAggregateInput: ["term_id", "term_group"],
  Wp_usermetaCountOrderByAggregateInput: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usermetaAvgOrderByAggregateInput: ["umeta_id", "user_id"],
  Wp_usermetaMaxOrderByAggregateInput: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usermetaMinOrderByAggregateInput: ["umeta_id", "user_id", "meta_key", "meta_value"],
  Wp_usermetaSumOrderByAggregateInput: ["umeta_id", "user_id"],
  Wp_usersCountOrderByAggregateInput: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_usersAvgOrderByAggregateInput: ["ID", "user_status"],
  Wp_usersMaxOrderByAggregateInput: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_usersMinOrderByAggregateInput: ["ID", "user_login", "user_pass", "user_nicename", "user_email", "user_url", "user_registered", "user_activation_key", "user_status", "display_name"],
  Wp_usersSumOrderByAggregateInput: ["ID", "user_status"],
  BigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedBigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

