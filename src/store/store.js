import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { projectsAPI } from "./query/projectsAPI/projectsAPI";
import { developersAPI } from "./query/developersAPI/developersAPI";

export const store = configureStore({
  reducer: {
    [projectsAPI.reducerPath]: projectsAPI.reducer,
    [developersAPI.reducerPath]: developersAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      projectsAPI.middleware,
      developersAPI.middleware
    ),
});

setupListeners(store.dispatch);
