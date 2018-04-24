import * as types from "./mutation-types";
import moment from "moment";

function notManager (name) {
    const repos = ["ovh-manager-telecom", "ovh-manager-cloud", "ovh-manager-web", "ovh-manager-dedicated"];

    return repos.forEach((element) => {
        if (name === element) {
            return 1;
        }
        return 0;
    });
}

export default {
    [types.NBR_REPOS] (state, value) {
        state.aboutRecentItems[0].value = value;
    },
    [types.LAST_PUSHED] (state, data) {
        state.aboutRecentItems[1].linkName = data.name;
        state.aboutRecentItems[1].linkHref = data.html_url;
        if (data.pushed_at !== undefined) {
            state.aboutRecentItems[1].linkInformations = moment(data.pushed_at).fromNow();
        } else if (data.push !== null) {
            state.aboutRecentItems[1].linkInformations = data.push;
        }
    },
    [types.ABOUT_TECHNO] (state, data) {
        for (const lang in data) {
            if (Object.prototype.hasOwnProperty.call(data, lang)) {
                const topush = {};

                topush.name = lang;
                topush.logo = "logo_" + lang.toLowerCase();
                topush.projectsAmount = data[lang];

                state.aboutTechnologies.push(topush);
            }
        }
    },
    [types.MANAGER] (state, data) {
        let tomodif;
        const repos = ["ovh-manager-telecom", "ovh-manager-cloud", "ovh-manager-web", "ovh-manager-dedicated"];


        for (let i = 0; i < repos.length; i++) {
            if (data.repo.name === repos[i]) {
                tomodif = i;
            }
        }

        state.works[tomodif].stats[0].value = data.commits;
        if (data.contributors !== undefined) {
            state.works[tomodif].stats[1].value = data.contributors.length;
        } else if (data.contrib !== undefined) {
            state.works[tomodif].stats[1].value = data.contrib;
        }
        if (data.pushed_at !== undefined) {
            state.works[tomodif].stats[2].value = moment(data.repo.pushed_at).fromNow();
        } else if (data.push !== undefined) {
            state.works[tomodif].stats[2].value = data.push;
        }
        state.works[tomodif].description = data.repo.description;
        state.works[tomodif].link = data.repo.html_url;

        data.topics.forEach((element) => {
            state.works[tomodif].tags.push(element);
        });
    },
    [types.OTHER_PROJECTS] (state, repos) {
        let item = 0;

        for (let i = 0; i < 3; i++) {
            if (notManager(repos[i].name === 0)) {
                state.works[4].items[item].name = repos[i].name;
                state.works[4].items[item].description = repos[i].description;
                state.works[4].items[item].link = repos[i].clone_url;
                item++;
            }
        }
    }
};
