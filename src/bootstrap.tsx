import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorBoundaryUI } from "./ErrorBoundaryUI";
import { NonRouterExample } from "./NonRouterExample";

const rootEl = document.getElementById("root");
if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<React.StrictMode>
			<ErrorBoundary fallbackRender={ErrorBoundaryUI}>
				<NonRouterExample />
			</ErrorBoundary>
		</React.StrictMode>
	);
}
