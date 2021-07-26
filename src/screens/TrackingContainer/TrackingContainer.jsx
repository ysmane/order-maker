import React, { useState } from "react";
import { Typography, makeStyles, CircularProgress } from "@material-ui/core";
import { DialogComponent } from "../../components/Dialog/Dialog";
import { SnackBarComponent } from "../../components/SnackBar/SnackBar";
import { Tracking } from "../../components/Tracking/Tracking";
import { db } from "../../firebase/firebase";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "10px 20px",
		minHeight: "100vh",
		backgroundColor: "rgb(253 247 247)",
	},
	tracking: {
		//width: "100%",
		height: "100vh",
		//border: "solid 5px red",
		display: "flex",
		//flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	dialogContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
	},
}));

export const TrackingContainer = (props) => {
	const classes = useStyles();

	const [checkedOrder, setCheckedOrder] = useState({});
	const [openDialog, setOpenDialog] = useState(false);
	const [openSnackBar, setOpenSnackBar] = useState(false);
	const [orderToCheck, setOrderToCheck] = useState();

	const changeOrderToCheck = (e) => {
		setOrderToCheck(e.target.value);
	};

	const getOrderTracking = () => {
		const query = db.collection("orders").doc(orderToCheck);
		if (orderToCheck) {
			query
				.get()
				.then((doc) => {
					if (!doc.exists) {
						setOpenSnackBar(true);
					} else {
						setCheckedOrder({ id: doc.id, ...doc.data() });
						setOpenDialog(true);
					}
				})
				.catch((error) => console.log(error));
		} else {
			setOpenSnackBar(true);
		}
	};

	return (
		<section className={classes.container}>
			<article className={classes.tracking}>
				<Tracking
					orderToCheck={orderToCheck}
					changeOrderToCheck={changeOrderToCheck}
					getOrderTracking={getOrderTracking}
				/>
			</article>
			<div className={classes.dialogContainer}>
				<DialogComponent
					open={openDialog}
					openDialog={setOpenDialog}
					handleConfirm={() => setOpenDialog(false)}
					closeDialog={() => setOpenDialog(false)}
					title={`${orderToCheck}`}
					labelPrimaryButton='Aceptar'>
					{checkedOrder ? (
						<Typography
							variant='h5'
							component='p'
							style={{ fontFamily: "Ranchers" }}>
							En Preparación
						</Typography>
					) : (
						<CircularProgress />
					)}
				</DialogComponent>
			</div>
			<div>
				<SnackBarComponent
					open={openSnackBar}
					message={`La Orden ${orderToCheck} no existe!`}
					openSnackBar={setOpenSnackBar}></SnackBarComponent>
			</div>
		</section>
	);
};
