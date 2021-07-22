import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { IconButton, Badge, withStyles } from "@material-ui/core";
//import { ShoppingCart } from "@material-ui/icons";
import { CartContext } from "../../contexts/CartContext";

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}))(Badge);

export const CartWidget = (props) => {
	const { totalQuantity } = useContext(CartContext);
	const history = useHistory();

	return (
		<IconButton
			aria-label='cart'
			onClick={(e) => {
				history.push(`/cart`);
			}}>
			<StyledBadge badgeContent={totalQuantity} color='secondary'>
				{/* <ShoppingCart
					style={{ fontSize: "clamp(2.25rem,100%,5rem)", cursor: "pointer" }}
				/> */}
				<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwOCA1MTIuMDA4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDA4IDUxMi4wMDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkMxMDc7IiBkPSJNNTA4LjI4OCw4NS43NjRjLTMuMDQtMy42NDgtNy41NTItNS43Ni0xMi4yODgtNS43NkgxMDcuNTJjLTQuOTYsMC05LjY2NCwyLjMwNC0xMi43MDQsNi4yNA0KCWMtMy4wMDgsMy45NjgtNC4wMzIsOS4wODgtMi43NTIsMTMuODg4bDUxLjIsMTkxLjM2YzEuODg4LDcuMDQsOC4yMjQsMTEuODcyLDE1LjQ1NiwxMS44NzJjMC4yNTYsMCwwLjU0NCwwLDAuOC0wLjAzMmwzMDUuMjgtMTUuMzYNCgljNy4zOTItMC4zODQsMTMuNi01Ljc5MiwxNC45NDQtMTMuMDg4bDMyLTE3NkM1MTIuNjA4LDk0LjE4LDUxMS4zMjgsODkuMzgsNTA4LjI4OCw4NS43NjR6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkFGQUZBOyIgZD0iTTQwMCwyNDAuMDA0Yy04LjgzMiwwLTE2LTcuMTY4LTE2LTE2di02NGMwLTguODMyLDcuMTY4LTE2LDE2LTE2czE2LDcuMTY4LDE2LDE2djY0DQoJCUM0MTYsMjMyLjgzNiw0MDguODMyLDI0MC4wMDQsNDAwLDI0MC4wMDR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZBRkFGQTsiIGQ9Ik0zMDQsMjQwLjAwNGMtOC44MzIsMC0xNi03LjE2OC0xNi0xNnYtNjRjMC04LjgzMiw3LjE2OC0xNiwxNi0xNnMxNiw3LjE2OCwxNiwxNnY2NA0KCQlDMzIwLDIzMi44MzYsMzEyLjgzMiwyNDAuMDA0LDMwNCwyNDAuMDA0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNMjA4LDI0MC4wMDRjLTguODMyLDAtMTYtNy4xNjgtMTYtMTZ2LTY0YzAtOC44MzIsNy4xNjgtMTYsMTYtMTZzMTYsNy4xNjgsMTYsMTZ2NjQNCgkJQzIyNCwyMzIuODM2LDIxNi44MzIsMjQwLjAwNCwyMDgsMjQwLjAwNHoiLz4NCjwvZz4NCjxnPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzQ1NUE2NDsiIGN4PSIyMDgiIGN5PSI0NDguMDA0IiByPSI0OCIvPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzQ1NUE2NDsiIGN4PSI0MDAiIGN5PSI0NDguMDA0IiByPSI0OCIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBkPSJNNDMyLDM2OC4wMDRIMTc2Yy03LjI2NCwwLTEzLjYtNC44NjQtMTUuNDU2LTExLjg3Mkw3OC4yNzIsNDguMDA0SDE2Yy04LjgzMiwwLTE2LTcuMTY4LTE2LTE2DQoJCXM3LjE2OC0xNiwxNi0xNmg3NC41NmM3LjI2NCwwLDEzLjYsNC44NjQsMTUuNDU2LDExLjg3Mmw4Mi4yNzIsMzA4LjEyOEg0MzJjOC44MzIsMCwxNiw3LjE2OCwxNiwxNlM0NDAuODMyLDM2OC4wMDQsNDMyLDM2OC4wMDR6Ig0KCQkvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=' />
			</StyledBadge>
		</IconButton>
	);
};
