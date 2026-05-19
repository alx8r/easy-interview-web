import { rootReducer, setupPersistor, setupStore } from "./store";

export type AppStore = ReturnType<typeof setupStore>;
export type PersistorStore = ReturnType<typeof setupPersistor>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];