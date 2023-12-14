import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function BasicMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="burger-menu">
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="36px"
					viewBox="0 0 24 24"
					width="36px"
					fill="#000000"
				>
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
				</svg>
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>
					{" "}
					<Link to="/"> Home </Link>
				</MenuItem>
				<MenuItem onClick={handleClose}> {" "}
					<Link to="/topics"> Topics </Link> </MenuItem>
				<MenuItem onClick={handleClose}>
					{" "}
					<Link to="/users"> Users </Link>
				</MenuItem>
			</Menu>
		</div>
	);
}
