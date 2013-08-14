$(document).ready(function() {
  prepTable = new PrepTable( {selector: "#new_batch" } )

});
  
function PrepTable(options) {
  function initialize(options) {
    self.batches = [];
    this.selector = options.selector;
    this.element = $(this.selector);
    this.element.on ('submit', function(e) { e.preventDefault(); prepTable.addBatch(e); } );
    var prepTable = this;
  }

  initialize.call(this, options);
}

PrepTable.prototype.addBatch = function(e) {
  var batchName = $(e.target[0]).val();
  var bakeTime = parseInt($(e.target[1]).val());
  var batch = new Batch( {bakeTime: bakeTime, type: batchName} )
  console.log(batch);
}


function Batch(options) {
  function intialize(options) {
    this.bakeTime = options.bakeTime;
    this.type = options.type;
    this.status = "raw";
  }

  intialize.call(this, options);
}
