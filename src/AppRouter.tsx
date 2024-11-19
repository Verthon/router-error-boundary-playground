import { createRoutesFromElements, Outlet, Route } from "react-router-dom";

import { App } from "./App";
import Home from "./Home";
import { createBrowserRouterWithSentry } from "./sentry";

export const AppRouter = createBrowserRouterWithSentry(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route
				element={
					<div>
						<Outlet />
					</div>
				}
			>
				<Route path={"/"} element={<Home />} />
				<Route path={"/test"} element={<p>Example page</p>} />
			</Route>

			<Route path="*" element={<div>404 Error</div>} />
		</Route>
	)
);
