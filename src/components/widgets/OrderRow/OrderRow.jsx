import React, { useContext, useState, useEffect } from "react";
import {
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	Avatar,
	IconButton,
	Button,
	Typography,
	makeStyles,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

export const OrderRow = (props) => {
	const name = props.product.name;
	const price = props.product.price;
	const qty = props.quantity;
	const myIcon = props.icon;

	const [amount, setAmount] = useState(qty * price);

	useEffect(() => {
		setAmount(qty * price);
	}, [amount]);

	const classes = useStyles();

	return (
		<>
			<ListItem>
				<ListItemAvatar>
					<Avatar src={myIcon} />
				</ListItemAvatar>
				<ListItemText primary={name} secondary={"$" + price} />
				<Typography variant='h6' component='p'>
					{qty}
				</Typography>
				<Typography variant='h6' component='p'>
					{"$" + amount}
				</Typography>
				<ListItemSecondaryAction>
					<IconButton edge='end' aria-label='delete'>
						<Delete />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {},
}));
