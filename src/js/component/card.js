import React from "react";

var img =
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJo9ZosBIwiqJCoMX2uoYI3p8UAJ49GQUocg&usqp=CAU";
export function Card() {
	return (
		<div className="card br-4" style={{ width: "18rem" }} float-auto>
			<img src={img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Galaxia de Andrómeda</h5>
				<p className="card-text">
					Algunos científicos creen que la Vía Láctea contiene mucha
					más materia oscura y podría ser más masiva que M31.7​ Sin
					embargo, observaciones recientes del telescopio espacial
					Spitzer revelaron que la M31 contiene un billón de estrellas
					(1012), excediendo por mucho el número de estrellas en
					nuestra galaxia.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
