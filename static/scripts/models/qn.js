var QuickNotes = $.extend({}, QuickNotes);

QuickNotes.Router = Backbone.Router.extend({
    routes: {
        'note/*title': 'note'
    },

    note: function(title){
        console.log('note: ' + title);
    }
});

QuickNotes.Note = Backbone.Model.extend({
    urlRoot: '/note'
});

QuickNotes.Notes = Backbone.Collection.extend({
    model: QuickNotes.Note,
    url: '/notes'

});

QuickNotes.QuickNotes = Backbone.Model.extend({
    initialize : function(attrs){
        this.router = new QuickNotes.Router();
        this.notes = new QuickNotes.Notes();
        console.log(ich.note({content:"hello world"}));
    }
});
