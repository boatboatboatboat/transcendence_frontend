var app = app || {};

$(() => {
    'use strict';

    let GuildPageInfoView = Backbone.View.extend({

        id: "page-guild-info-view",

        AvatarTemplate: _.template('<img class="avi" src="<%= avatar %>"/>'),
        InfoblockTemplate: _.template(
            '<div id="page-guild-info-block">' +
            '<span class="guild_name"><%- guild_name %></span>  <span class="guild_tag"><%- guild_tag %></span><br>' +
            'owned by <a class="guild_owner"><%- guild_owner %></a></div>'),

        initialize: function () {
            this.listenTo(this.model, "change", this.render);
            this.render();
        },

        render: function () {
            app.remove_all_children(this);
            this.$el.append(
                this.AvatarTemplate({avatar: this.model.get_avatar()})
            );
            this.$el.append(
                this.InfoblockTemplate({
                    guild_name: this.model.get_guild_name(),
                    guild_tag: this.model.get_clan_tag(),
                    guild_owner: this.model.get_guild_owner_name(),
                })
            );
        },

    });

    let GuildPageView = Backbone.View.extend({

        id: "page-guild-view",
        /*
            model: app.GuildPageModel
        */

        initialize: function () {
            this.listenTo(this.model, "change", this.render);
            this.info_view = new GuildPageInfoView({model: this.model});
            this.render();
        },

        render: function () {
            app.remove_all_children(this);
            this.$el.append(this.info_view.el);
        },

    });

    app.GuildPageView = GuildPageView;
});
