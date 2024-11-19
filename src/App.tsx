import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const App = () => {
	useEffect(() => {
		document.title = "test";
	}, []);

	return <Outlet />;
};
