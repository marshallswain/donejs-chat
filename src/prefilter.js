import $ from "jquery";

$.ajaxPrefilter(function(options){
  options.crossDomain = true;
});