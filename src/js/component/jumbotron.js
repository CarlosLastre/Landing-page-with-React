import React from "react";
export function Jumbo() {
	return (
		<div>
			<div className="jumbotron">
				<h1 className="display-4">
					<strong>Galaxia de Andrómeda!</strong>
				</h1>
				<p className="lead">
					La galaxia de Andrómeda, también conocida como Galaxia
					Espiral M31, Messier 31 o NGC 224. Es una galaxia espiral
					con un diámetro de doscientos veinte mil años luz. Y de unos
					ciento cincuenta mil años luz entre los extremos de sus
					brazos. Es el objeto visible a simple vista más lejano de la
					Tierra.
				</p>
				<hr className="my-4" />
				<p>
					La galaxia se está acercando a nosotros a unos 300
					kilómetros por segundo,4​. Y algunos especulan que ambas
					colisionen en unos 5860 millones de años en el futuro
					fusionándose en una galaxia mayor,5​ en el evento conocido
					como Lactómeda.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</div>
	);
}
