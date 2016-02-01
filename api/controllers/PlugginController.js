/**
 * PlugginController
 *
 * @description :: Server-side logic for managing pluggins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	"index": function(req, res) {
	    
	    var ID = req.query.id;
	   // console.log(req.query);
	    res.locals.id = req.query.id;
	    
	    
	    Votes.find().sum("valor_voto").groupBy("tipo_voto").where({
	        app: ID
	    }).then(function(result) {
	        
	        var resultData = {};
	        
	        
	        result.forEach(function(resultD) {
	            resultData[resultD.tipo_voto] = resultD.valor_voto;     
	        });
	        
	        
	        for(var i=0; i< 5; i++ ) {
	            resultData[i] = resultData[i] || 0;
	        }
	        
	        res.view("pluginIndex", {data: resultData});
	    });
	    
	    
	    
	}
};

