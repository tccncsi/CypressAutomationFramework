/// <reference types = "cypress"/>
/// <reference types="@shelex/cypress-allure-plugin"/>

module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
  };

  const allureWriter = require('@shelex/cypress-allure-plugin/writer');

  module.exports = (on, config) => {
  
  allureWriter(on, config); return config; };