import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { CartContext } from "../../contexts/CartContext.js";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail.jsx";
import { db } from "../../firebase/firebase.js";

export const ItemDetailContainer = (props) => {
	const classes = useStyles();
	const { id: onlyShowProduct } = useParams();
	const [quantity, setQuantity] = useState(1);
	const [showCheckOut, setShowCheckOut] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState({});
	const { addProductToOrder, removeProductToOrder } = useContext(CartContext);

	useEffect(() => {
		const query = db.collection("products").doc(onlyShowProduct);

		query.get().then((doc) => {
			setSelectedProduct({ id: doc.id, ...doc.data() });
		});
	}, [onlyShowProduct]);

	const calcAmount = () => {
		const price = selectedProduct.price;
		return quantity * price;
	};

	return (
		<section className={classes.container}>
			<ItemDetail
				selectedProduct={selectedProduct}
				quantity={quantity}
				calcAmount={calcAmount}
				addProductToOrder={addProductToOrder}
				setQuantity={setQuantity}
				showCheckOut={showCheckOut}
				setShowCheckOut={setShowCheckOut}
			/>
		</section>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100vw",
		display: "flex",
	},
}));
