import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "../domen";

export const developersAPI = createApi({
  reducerPath: "developersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${domen}/developers`,
  }),
  endpoints: (builder) => ({
    getDevId: builder.query({
      query: (developerId) => `/developer?developerId=${developerId}`,
    }),
  }),
});

export const { useGetDevIdQuery } = developersAPI;
