/**
 * TodoController
 *
 * @description :: Server-side logic for managing Todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getSession: function(req, res) {
		console.log ( "TodoController.js getSession")
        TodoService.getSession(function(success) {
            res.json(success);
        });
    },
    startApi: function(req, res) {
		console.log ( "TodoController.js startApi")
        TodoService.startApi( function(success) {
            res.json(success);
        });
    },
};

