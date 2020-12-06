var app = app || {};

$(() => {

    let MatchHistoryCollection = Backbone.Collection.extend({
        model: app.MatchModel,

        create_associated_view: function () {
            return new app.MatchHistoryView({collection: this});
        },
    });

    app.MatchHistoryCollection = MatchHistoryCollection;
});
