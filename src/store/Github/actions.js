import { api } from '../../utils/request';
import lodash from 'lodash'

function getCommits (repo) {
    return api.get('/api/repos/ovh-ux/' + repo + '/contributors').then(response => {
        var data = response.data;
        var commits = 0;
        for(var i = 0; i < data.length; i++) {
            commits += data[i].contributions
        }
        return commits;
    })
}

function getContributors (repo) {
    return api.get('/api/repos/ovh-ux/' + repo + '/contributors').then(response => {
        var data = response.data;
        var contributors = [];

        data.forEach(element => {
            contributors.push(element);
        })
        return contributors;
    })
}

function getTopics (repo) {
    return api.get('/api/repos/ovh-ux/' + repo + '/topics').then(response => {
        var data = response.data.names;
        var topics = [];

        data.forEach(element => {
            topics.push(element);
        })
        return topics;
    })
}

export default {
    nbrRepos({commit}) {
        return api.get('/api/users/ovh-ux').then(response => {
            let nbr_repos = response.data.public_repos;
            commit('NBR_REPOS', nbr_repos);
        });
    },
    lastPushed({commit}) {
        return api.get('/api/users/ovh-ux/repos?sort=pushed&direction=desc').then(response => {
            var last = response.data[0];
            commit('LAST_PUSHED', last);
        })
    },
    aboutTechno({commit}) {
        return api.get('/api/users/ovh-ux/repos?per_page=500').then(
            response => {
                var data = response.data;
                var language_obj = {};
                var lang;
                var sort;

                data.forEach(element => {
                    lang = element.language;
                    if (language_obj[lang] == null && lang != null)
                        language_obj[lang] = 1;
                    else if (language_obj[lang] != null && lang != null)
                        language_obj[lang] += 1;
                });
                
                sort = _.sortBy(_.keys(language_obj), function(current){
                    return -language_obj[current];
                });
                
                sort = _.pick(language_obj, sort);

                commit('ABOUT_TECHNO', sort);
            }
        )
    },
    manager({commit}, repo) {
        api.get('/api/repos/ovh-ux/' + repo).then(data => {
            getCommits(repo).then(commits => {
                getContributors(repo).then(contributors => {
                    getTopics(repo).then(topics => {
                        var ret = {};
                        var repo = data.data
   
                        ret['repo'] = repo;
                        ret['commits'] = commits;
                        ret['contributors'] = contributors;
                        ret['topics'] = topics;
                        
                        commit('MANAGER', ret);
                    })
                })
            })
        })
    },
    otherProjects({commit}) {
        return api.get('api/users/ovh-ux/repos?sort=pushed&direction=desc').then(response => {
            var data = response.data;
            commit('OTHER_PROJECTS', data);
        })
    }
}
