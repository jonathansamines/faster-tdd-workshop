'use strict';

function cypher(data) {
    return data.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
}

module.exports = {
    cypher,
};