// ==UserScript==
// @name Dahlonega Weather
// @namespace http://kristopherjohnson.net/userscript
// @description Prefill zip code field at weather.gov
// @include http://www.weather.gov/*
// @include http://forecast.weather.gov/*
// @include http://www.noaa.gov/*
// ==/UserScript==

var inputField = document.getElementsByName('inputstring')[0];
if (inputField) {
	inputField.value='30533'
	inputField.onfocus=";"
}
