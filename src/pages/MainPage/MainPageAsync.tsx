import { lazy } from "react";
import { CustomSuspense, ErrorBoundary } from "../../components/";

const MainPageLazy = lazy(() => import('./MainPage'))

export const MainPageAsync = () => <ErrorBoundary><CustomSuspense><MainPageLazy /></CustomSuspense></ErrorBoundary>