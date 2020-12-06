var app = app || {};

$(() => {
    'use strict';

    // the `el` attr should be set to an in-DOM element
    // this way we have an entrypoint into the DOM
    let AppView = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model, "change:current_model", this.render);
        },

        render: function () {
            if (this.model.has_model()) {
                this.$el.append(this.model.get_model().create_associated_view().el);
            }
            return this;
        },
    });

    app.AppView = AppView;
});