import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "../domen";

export const projectsAPI = createApi({
  reducerPath: "projectsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${domen}/projects/user/projects`,
  }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: (params) => `${params}`,
    }),
  }),
});

export const { useGetProjectsQuery } = projectsAPI;
