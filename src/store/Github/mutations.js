import Vue from 'vue'

import * as types from './mutation-types'
import moment from 'moment';

export default {
    [types.NBR_REPOS](state, value) {
        state.aboutRecentItems[0].value = value;
    },
    [types.LAST_PUSHED](state, data) {
        state.aboutRecentItems[1].linkName = data.name
        state.aboutRecentItems[1].linkHref = data.clone_url
        state.aboutRecentItems[1].linkInformations = moment(data.pushed_at).fromNow();
    },
    [types.ABOUT_TECHNO](state, data) {
        for(var lang in data) {
            var topush = {};

            topush['name'] = lang
            topush['logo'] = lang
            topush['projectAmount'] = data[lang]

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

        state.works[tomodif].stats[0].value = data.commits.length;
        state.works[tomodif].stats[1].value = data.contributors.length;
        state.works[tomodif].stats[2].value = moment(data.repo.pushed_at).fromNow();
        
        data.topics.forEach(element => {
            state.works[tomodif].tags.push(element);
        });
    },
    [types.OTHER_PROJECTS](state, repos) {
        state.works[4].items[0].name = repos[1].name
        state.works[4].items[0].description = repos[1].description
        state.works[4].items[0].link = repos[1].clone_url

        state.works[4].items[1].name = repos[2].name
        state.works[4].items[1].description = repos[2].description
        state.works[4].items[1].link = repos[2].clone_url

        state.works[4].items[2].name = repos[3].name
        state.works[4].items[2].description = repos[3].description
        state.works[4].items[2].link = repos[3].clone_url
    }
}