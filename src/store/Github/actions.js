import { api } from "../../utils/request";
import lodash from "lodash";


function getCommits (repo) {
    return api.get("/repos/ovh-ux/" + repo + "/contributors").then((response) => {
        const data = response.data;
        let commits = 0;

        for (let i = 0; i < data.length; i++) {
            commits += data[i].contributions;
        }
        return commits;
    });
}

function getContributors (repo) {
    return api.get("/repos/ovh-ux/" + repo + "/contributors").then((response) => {
        const data = response.data;
        const contributors = [];

        data.forEach((element) => {
            contributors.push(element);
        });
        return contributors;
    });
}

function getTopics (repo) {
    return api.get("/repos/ovh-ux/" + repo + "/topics").then((response) => {
        const data = response.data.names;
        const topics = [];

        data.forEach((element) => {
            topics.push(element);
        });
        return topics;
    });
}

export default {
    nbrRepos ({ commit }) {
        return api.get("/users/ovh-ux").then((response) => {
            const nbr_repos = response.data.public_repos;

            commit("NBR_REPOS", nbr_repos);
        });
    },
    lastPushed ({ commit }) {
        return api.get("/users/ovh-ux/repos?sort=pushed&direction=desc").then((response) => {
            const last = response.data[0];
            commit("LAST_PUSHED", last);
        });
    },
    aboutTechno ({ commit }) {
        return api.get("/users/ovh-ux/repos?per_page=500").then((response) => {
            const data = response.data;
            const language_obj = {};
            let lang;
            let sort;

            data.forEach((element) => {
                lang = element.language;
                if (language_obj[lang] == null && lang != null) {
                    language_obj[lang] = 1;
                } else if (language_obj[lang] != null && lang != null) {
                    language_obj[lang] += 1;
                }
            });

            sort = _.sortBy(_.keys(language_obj), function (current) {
                return -language_obj[current];
            });

            sort = _.pick(language_obj, sort);

            commit("ABOUT_TECHNO", sort);
        }
        );
    },
    manager ({ commit }, repo) {
        api.get("/repos/ovh-ux/" + repo).then((data) => {
            getCommits(repo).then((commits) => {
                getContributors(repo).then((contributors) => {
                    getTopics(repo).then((topics) => {
                        const ret = {};
                        const rep = data.data;

                        ret.repo = rep;
                        ret.commits = commits;
                        ret.contributors = contributors;
                        ret.topics = topics;

                        commit("MANAGER", ret);
                    });
                });
            });
        });
    },
    otherProjects ({ commit }) {
        return api.get("/users/ovh-ux/repos?sort=pushed&direction=desc").then((response) => {
            const data = response.data;
            commit("OTHER_PROJECTS", data);
        });
    }
};
