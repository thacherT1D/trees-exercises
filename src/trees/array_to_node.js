var Node = require('./node');
//Start on the above file- you'll want to use the class from that file!
//It has properties already set up for you, such as 'name' and 'children'.
//It also has a method, addChild(), which is essential.


//Make sure that this function calls new Node()
var arrayToNode = function(input) {
  var node = new Node(input[0]);
  input[1].forEach(function (element) {
    node.addChild(arrayToNode(element));
  });
  return node;
};

module.exports = arrayToNode;
