import * as Sentry from "@sentry/react";
import { useEffect } from "react";
import {
	createBrowserRouter,
	createRoutesFromChildren,
	matchRoutes,
	useLocation,
	useNavigationType,
} from "react-router-dom";

Sentry.init({
	integrations: [
		Sentry.reactRouterV6BrowserTracingIntegration({
			useEffect,
			useLocation,
			useNavigationType,
			createRoutesFromChildren,
			matchRoutes,
		}),
	],
	dsn: '',
});

export const createBrowserRouterWithSentry =
	Sentry.wrapCreateBrowserRouter(createBrowserRouter);
