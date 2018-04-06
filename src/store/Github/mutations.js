import Vue from 'vue'

import * as types from './mutation-types'
import moment from 'moment';

function notManager(name) {
    var repos = ['ovh-manager-telecom', 'ovh-manager-cloud', 'ovh-manager-web', 'ovh-manager-dedicated'];

    repos.forEach(element => {
        if (name == element) {
            return 1;
        }
    });
    return 0;
}

export default {
    [types.NBR_REPOS](state, value) {
        state.aboutRecentItems[0].value = value;
    },
    [types.LAST_PUSHED](state, data) {
        state.aboutRecentItems[1].linkName = data.name
        state.aboutRecentItems[1].linkHref = data.html_url
        state.aboutRecentItems[1].linkInformations = moment(data.pushed_at).fromNow();
    },
    [types.ABOUT_TECHNO](state, data) {
        for(var lang in data) {
            var topush = {};

            topush['name'] = lang;
            topush['logo'] = 'logo_' + lang.toLowerCase();
            topush['projectsAmount'] = data[lang];

            state.aboutTechnologies.push(topush)
        }
    },
    [types.MANAGER](state, data) {
        var tomodif;
        var repos = ['ovh-manager-telecom', 'ovh-manager-cloud', 'ovh-manager-web', 'ovh-manager-dedicated'];

        for (var i = 0; i < repos.length; i++) {
            if (data.repo.name == repos[i]) {
                tomodif = i;
            }
        }

        state.works[tomodif].stats[0].value = data.commits;
        state.works[tomodif].stats[1].value = data.contributors.length;
        state.works[tomodif].stats[2].value = moment(data.repo.pushed_at).fromNow();
        state.works[tomodif].description = data.repo.description;
        state.works[tomodif].link = data.repo.html_url;

        data.topics.forEach(element => {
            state.works[tomodif].tags.push(element);
        });
    },
    [types.OTHER_PROJECTS](state, repos) {
        var item = 0;

        for (var i = 0; i < 3; i++) {
            if (notManager(repos[i].name == 0)) {
                state.works[4].items[item].name = repos[i].name;
                state.works[4].items[item].description = repos[i].description;
                state.works[4].items[item].link = repos[i].clone_url;
                item++;
            }
        }
    }
}