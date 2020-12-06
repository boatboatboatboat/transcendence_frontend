var app = app || {};

$(() => {

    // we really don't care here

    let PageBannedModel = Backbone.Model.extend({
        create_associated_view: function () {
            return new app.PageBannedView({model: this});
        },
    });
    let PageBannedView = Backbone.View.extend({
        YouHaveBeenIpBanned: _.template("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dKbceIjuny0\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"),

        initialize: function() { this.render(); },
        render: function() {
            this.$el.append(this.YouHaveBeenIpBanned());
        },
    });

    app.PageBannedModel = PageBannedModel;
    app.PageBannedView = PageBannedView;
});
