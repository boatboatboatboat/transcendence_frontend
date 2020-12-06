var app = app || {};

$(() => {
    'use strict';

    let NavbarButtonTemplate = _.template("<a id=\"_nbb<%= key_name %>\" class=\"navbar-button\"><%= page_name %></a>");
    let NavbarButtonSelectedTemplate = _.template("<a id=\"_nbb<%= key_name %>\" class=\"navbar-button-selected\"><%= page_name %></a>");

    let NavbarView = Backbone.View.extend({
        events: {
            "click .navbar-button": "select_page",
        },

        initialize: function () {
            this.listenTo(this.model, "change:current_page", this.render);
            this.el.id = 'navbar';
            this.render();
        },

        render: function () {
            app.remove_all_children(this);
            let pages = this.model.get_pages();
            const current_page = this.model.get_current_page();
            for (let key in pages) {
                let model = pages[key];
                if (key === current_page) {
                    this.$el.append(NavbarButtonSelectedTemplate({key_name: key, page_name: model.name}));
                } else {
                    this.$el.append(NavbarButtonTemplate({key_name: key, page_name: model.name}));
                }
            }
        },

        select_page: function (object) {
            this.model.change_page(object.currentTarget.id.substr(4));
        },

    });

    app.NavbarView = NavbarView;
});