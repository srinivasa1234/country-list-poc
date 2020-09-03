import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const Dashboard = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <Fragment>
      <div class="main">
        <h1 className="large text-primary">Country</h1>

        <div className="form-group">
          <CountryDropdown
            value={country}
            onChange={(val) => setCountry(val)}
          />
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => setRegion(val)}
          />
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  country: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  country: state.country,
});

export default connect(mapStateToProps, {})(Dashboard);
