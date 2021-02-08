import React from "react";
import { Nav } from "./nav.js";
import { Card } from "./card.js";
import { Jumbo } from "./jumbotron.js";
import { Fot } from "./footer.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Nav />
			<br></br>
			<div className="container-xl">
				<Jumbo />

				<div className="card-deck">
					<Card /> <Card /> <Card /> <Card />
				</div>
			</div>
			<br></br>
			<div className="container-fluid">
				<Fot />
			</div>
		</div>
	);
}
