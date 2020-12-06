var app = app || {};

$(() => {
    'use strict';

    let ClientView = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model.navbar, "change:current_page", this.render);
            this.el.id = "main-page";

            this.render();
        },

        render: function () {
            app.remove_all_children(this);
            // render navbar first
            this.$el.append(
                this.model.navbar
                    .create_associated_view()
                    .el);
            // then render page
            this.$el.append(
                this.model.navbar
                    .get_current_page_model()
                    .create_associated_view()
                    .el);
        },
    });

    app.ClientView = ClientView;

});
