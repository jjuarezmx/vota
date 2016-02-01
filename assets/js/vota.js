String.prototype.hashCode = function(){
	var hash = 0;
	if (this.length == 0) return hash;
	for (var i = 0; i < this.length; i++) {
		var char = this.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
};

$(document).ready(function() {
    
    // alert("Inicia");
    
    var SITE_URL = window.location.href.split("?")[0].split("#")[0];
    var HASH_CODE = SITE_URL.hashCode();
    
    console.log("/***********HASCODE*******************/");
    console.log(HASH_CODE);
    
    var dom_container = document.getElementById("votacion");
    
    var frame = document.createElement("iframe");
    frame.src = "http://votacion-jorgejuarez.c9users.io:8080/plugin?id=" + HASH_CODE;
    frame.style.border = "none";
    frame.width = "100%";
    
    dom_container.appendChild(frame);    
});