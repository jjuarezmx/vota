/**
 * VotesController
 *
 * @description :: Server-side logic for managing Votes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	"vote": function(req, res) {
	   // console.log(req.query);
	    var ID = req.query.id;
	    var VALUE = req.query.value;
	    
	    Votes.create({
	        tipo_voto: VALUE,
	        app: ID,
	        valor_voto: 1
	    }).then(function() {
	        res.redirect("/plugin/?id="+ID);
	    });
	    
	    
	    
	}
};

