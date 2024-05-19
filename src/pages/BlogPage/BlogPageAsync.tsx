import { lazy } from "react";
import { CustomSuspense, ErrorBoundary } from "../../components";

const BlogPageLazy = lazy(() => import('./BlogPage'))

export const BlogPageAsync = () => <ErrorBoundary><CustomSuspense><BlogPageLazy /></CustomSuspense></ErrorBoundary>