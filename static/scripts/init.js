(function(root){
    function init(){
        root.QN = new QuickNotes.QuickNotes();
        Backbone.history.start();
    }

	$(init);
})(window)
