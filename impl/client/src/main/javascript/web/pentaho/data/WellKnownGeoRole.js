
/*! ******************************************************************************
 *
 * Pentaho
 *
 * Copyright (C) 2024 by Hitachi Vantara, LLC : http://www.pentaho.com
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file.
 *
 * Change Date: 2029-07-20
 ******************************************************************************/

define(function() {
  // In the current JsDocs3 version (3.3.2), enums are not showing default values (see #689).
  // So I added the default values in the text, explicitly.
  // Also, had to use the "var" syntax for it to correctly capture the enum's properties...

  /**
   * The `WellKnownGeoRole` enum is the
   * class of names of well known geographical roles that an attribute can take.
   *
   * #### AMD
   *
   * To obtain this enumeration object,
   * require the module `"pentaho/data/WellKnownGeoRole"`.
   *
   * @memberOf pentaho.data
   * @enum {string}
   * @readonly
   * @ignore
   */
  var WellKnownGeoRole = {
    /**
     * A country: `"Country"`.
     *
     * Equivalent to Mondrian's `"country"` geo role.
     * @default
     */
    COUNTRY: "Country",

    /**
     * A country subdivision: `"CountrySubdivision"`.
     *
     * Equivalent to Mondrian's `"state"` geo role.
     * @default
     */
    COUNTRY_SUBDIVISION: "CountrySubdivision",

    /**
     * A country secondary subdivision: `"CountrySecondarySubdivision"`.
     *
     * Equivalent to Mondrian's `"county"` geo role.
     * @default
     */
    COUNTRY_SECONDARY_SUBDIVISION: "CountrySecondarySubdivision",

    /**
     * A municipality: `"Municipality"`.
     *
     * Equivalent to Mondrian's `"city"` geo role.
     * @default
     */
    MUNICIPALITY: "Municipality",

    /**
     * A postal code: `"PostalCode"`.
     *
     * Equivalent to Mondrian's `"postal_code"` geo role.
     * @default
     */
    POSTAL_CODE: "PostalCode",

    /**
     * A latitude coordinate: `"Latitude"`.
     *
     * Equivalent to Mondrian's `"latitude"` geo role.
     * @default
     */
    LATITUDE: "Latitude",

    /**
     * A longitude coordinate: `"Longitude"`.
     *
     * Equivalent to Mondrian's `"longitude"` geo role.
     * @default
     */
    LONGITUDE: "Longitude"
  };

  return WellKnownGeoRole;
});
