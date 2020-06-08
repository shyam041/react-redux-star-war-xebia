import React from "react";
import { connect } from "react-redux";

const Planet = (props) => {
  //console.log(props.planet);
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  } = props.planet;
  if (props.planet.name) {
    return (
      <div className="row" style={{ marginTop: "25px" }}>
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Rotation period : {rotation_period}
                </li>
                <li className="list-group-item">
                  Orbital period : {orbital_period}
                </li>
                <li className="list-group-item">Diameter : {diameter}</li>
                <li className="list-group-item">Climate : {climate}</li>
                <li className="list-group-item">Gravity : {gravity}</li>
                <li className="list-group-item">Terrain : {terrain}</li>
                <li className="list-group-item">
                  Surface water : {surface_water}
                </li>
                <li className="list-group-item">Population : {population}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
const mapStateToProps = (state) => {
  let { planet } = state.selectedPlanet;
  planet = planet ? planet : {};
  return { planet };
};
export default connect(mapStateToProps)(Planet);
