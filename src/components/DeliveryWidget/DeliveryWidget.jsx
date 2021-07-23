import React from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";

export const DeliveryWidget = (props) => {
	const history = useHistory();

	return (
		<IconButton
			aria-label='delivery'
			onClick={(e) => {
				history.push(`/tracking`);
			}}>
			<img
				alt='icono seguimiento del delivery'
				src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQzEwNzsiIGQ9Ik0xMjgsMTYwYzAtOC44MzItNy4xNjgtMTYtMTYtMTZIMTZjLTguODMyLDAtMTYsNy4xNjgtMTYsMTZzNy4xNjgsMTYsMTYsMTZoOTYNCgkJQzEyMC44MzIsMTc2LDEyOCwxNjguODMyLDEyOCwxNjB6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQzEwNzsiIGQ9Ik0xMTIsMjA4SDQ4Yy04LjgzMiwwLTE2LDcuMTY4LTE2LDE2czcuMTY4LDE2LDE2LDE2aDY0YzguODMyLDAsMTYtNy4xNjgsMTYtMTZTMTIwLjgzMiwyMDgsMTEyLDIwOA0KCQl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQzEwNzsiIGQ9Ik0xMTIsMjcySDgwYy04LjgzMiwwLTE2LDcuMTY4LTE2LDE2czcuMTY4LDE2LDE2LDE2aDMyYzguODMyLDAsMTYtNy4xNjgsMTYtMTZTMTIwLjgzMiwyNzIsMTEyLDI3Mg0KCQl6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjQ0MzM2OyIgZD0iTTUwOS43MjgsMjYzLjc3NmwtNDgtODBDNDU4Ljg0OCwxNzguOTQ0LDQ1My42MzIsMTc2LDQ0OCwxNzZIMzM2Yy04LjgzMiwwLTE2LDcuMTY4LTE2LDE2djE2MA0KCWMwLDguODMyLDcuMTY4LDE2LDE2LDE2aDE2MGM4LjgzMiwwLDE2LTcuMTY4LDE2LTE2di04MEM1MTIsMjY5LjA4OCw1MTEuMjMyLDI2Ni4yNCw1MDkuNzI4LDI2My43NzZ6Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojRkFGQUZBOyIgcG9pbnRzPSIzODQsMjA4IDQzOC45NDQsMjA4IDQ3Ny4zNDQsMjcyIDM4NCwyNzIgIi8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZDMTA3OyIgZD0iTTMzNiwxMTJIMTEyYy04LjgzMiwwLTE2LDcuMTY4LTE2LDE2djIyNGMwLDguODMyLDcuMTY4LDE2LDE2LDE2aDI0MFYxMjgNCglDMzUyLDExOS4xNjgsMzQ0LjgzMiwxMTIsMzM2LDExMnoiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZBRkFGQTsiIGN4PSI0MzIiIGN5PSIzNTIiIHI9IjMyIi8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNDU1QTY0OyIgZD0iTTQzMiw0MDBjLTI2LjQ2NCwwLTQ4LTIxLjUzNi00OC00OHMyMS41MzYtNDgsNDgtNDhzNDgsMjEuNTM2LDQ4LDQ4UzQ1OC40NjQsNDAwLDQzMiw0MDB6IE00MzIsMzM2DQoJYy04LjgsMC0xNiw3LjItMTYsMTZzNy4yLDE2LDE2LDE2czE2LTcuMiwxNi0xNlM0NDAuOCwzMzYsNDMyLDMzNnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGNDQzMzY7IiBkPSJNMzUyLDM2OEgxMTJjLTguODMyLDAtMTYtNy4xNjgtMTYtMTZ2LTQ4aDI1NlYzNjh6Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBjeD0iMjA4IiBjeT0iMzUyIiByPSIzMiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzQ1NUE2NDsiIGQ9Ik0yMDgsNDAwYy0yNi40NjQsMC00OC0yMS41MzYtNDgtNDhzMjEuNTM2LTQ4LDQ4LTQ4czQ4LDIxLjUzNiw0OCw0OFMyMzQuNDY0LDQwMCwyMDgsNDAweiBNMjA4LDMzNg0KCWMtOC44MzIsMC0xNiw3LjItMTYsMTZzNy4xNjgsMTYsMTYsMTZzMTYtNy4yLDE2LTE2UzIxNi44MzIsMzM2LDIwOCwzMzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='
			/>
		</IconButton>
	);
};
