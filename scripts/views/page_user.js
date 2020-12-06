var app = app || {};

$(() => {
    'use strict';

    //fixme: avatar xss?

    let UserInfoView = Backbone.View.extend({
        AvatarTemplate: _.template('<img class="avi" src="<%= avatar %>"/>'),
        InfoblockTemplate: _.template('<div id="page-user-info-block"><a class="username"><%- username %></a><br><a class="guild"><%- guild %></a><br><a class="status"><%- status %></a></div>'),

        tagName: "div",
        id: "page-user-info-view",

        initialize: function () {
            this.listenTo(this.model, "change", this.render);
            this.render();
        },

        render: function () {
            app.remove_all_children(this);
            this.$el.append(
                this.AvatarTemplate({avatar: this.model.get("avi")})
            );
            this.$el.append(
                this.InfoblockTemplate({
                    username: this.model.get("username"),
                    guild: this.model.get("guild"),
                    status: this.model.get("status"),
                })
            );
        },
    });
    app.UserInfoView = UserInfoView;

    let UserStatsView = Backbone.View.extend({
        id: "page-user-stats",

        HeaderTemplate: _.template("<span class=\"header\">Statistics</span>"),
        WinsLossesTemplate: _.template('<span class="userinfo"><%- wins %> wins, <%- losses %> losses</span>'),
        WlRatioTemplate: _.template('<span class="wlratio"><%- ratio %> W/L ratio</span>'),

        initialize: function () {
            this.render();
        },

        render: function () {
            app.remove_all_children(this);

            const wins = this.model.get("wins");
            const losses = this.model.get("losses");
            const wlr = losses === 0 ? wins : Math.round(wins / losses * 10) / 10;

            this.$el.append(this.HeaderTemplate());
            this.$el.append(this.WinsLossesTemplate({wins: wins, losses: losses}));
            this.$el.append(this.WlRatioTemplate({ratio: wlr}));
        },
    });
    app.UserStatsView = UserStatsView;

    let MatchHistoryView = Backbone.View.extend({
        id: "page-user-match-history",

        HeaderTemplate: _.template("<span class=\"header\">Match History</span>"),
        MatchTemplate: _.template(
            "<span class='match'>" +
            "(<%- match_type %>) <%- match_status %> <%- wins %>-<%- losses %> vs <%- username %>" +
            "</span><br>"),

        initialize: function () {
            this.listenTo(this.collection, "add", this.render);
            this.listenTo(this.collection, "remove", this.render);
            this.listenTo(this.collection, "change", this.render);
            this.render();
        },

        render: function () {
            app.remove_all_children(this);

            this.$el.append(this.HeaderTemplate());

            this.collection.each((match) => {
                const match_type = match.get("match_type");
                const rounds = match.get("rounds");
                const opponent = match.get("opponent");
                const wins = rounds[0];
                const losses = rounds[1];

                let state_string;
                if (wins === losses) {
                    state_string = "TIE";
                } else if (wins > losses) {
                    state_string = "WIN";
                } else {
                    state_string = "LOSS";
                }

                this.$el.append(
                    this.MatchTemplate({
                        match_type: match_type,
                        match_status: state_string,
                        wins: wins,
                        losses: losses,
                        username: opponent,
                    })
                );
            });
        },
    });
    app.MatchHistoryView = MatchHistoryView;

    let PageUserView = Backbone.View.extend({
        id: "page-user",

        TopboxTemplate: _.template("<div class=\"topbox\"></div>"),

        initialize: function () {
            this.listenTo(this.model, "change", this.render);
            this.render();
        },

        render: function () {
            app.remove_all_children(this);
            let topbox_t = this.TopboxTemplate();
            this.$el.append(
                topbox_t
            );
            // wtf shadowing isn't allowed in javascript
            let topbox = this.el.lastChild;
            topbox.append(
                this.model.user_info_model
                    .create_associated_view()
                    .el
            );
            topbox.append(
                this.model.user_stats_model
                    .create_associated_view()
                    .el
            );
            this.$el.append(
                this.model.match_history_model
                    .create_associated_view()
                    .el
            );
        },
    });

    app.PageUserView = PageUserView;
});
