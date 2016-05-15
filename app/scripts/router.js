var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
var models = require('./models');
var recipe = require('./recipe.js');
var recipeCollection = new models.RecipeCollection(recipe);
var HomePage = require('./components/index.jsx').HomePage;
var addRecipe = require('./components/index.jsx').AddRecipe;
var recipeForm = require('./components/index.jsx').RecipeecipeForm;
var recipeList = require('./components/index.jsx').RecipeList;


var RecipeApp = document.getElementById('app');
var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'addRecipe': 'addRecipe',
    'recipeForm': 'recipeForm',
    'recipeList': 'recipeList'
  },
  index: function(){
    ReactDOM.unmountComponentAtNode(RecipeApp);

    ReactDOM.render(
      React.createElement(HomePage),
      RecipeApp
    );
  },
  addRecipe: function(){
    ReactDOM.unmountComponentAtNode(RecipeApp);

    ReactDOM.render(
      React.createElement(addRecipe),
      RecipeApp
    );
  },

  actualRecipe: function(){
    ReactDOM.unmountComponentAtNode(RecipeApp);

    ReactDOM.render(
      React.createElement(recipeForm),
      RecipeApp
    );
  },
  recipeCardPage: function(){
    ReactDOM.unmountComponentAtNode(RecipeApp);

    ReactDOM.render(
      React.createElement(recipeList),
      RecipeApp
    );
  }
});

module.exports = Router;
