export default {
    mainNavItems: [
        "Home",
        "About",
        "Works",
        "Contact"
    ],
    aboutRecentItems: [
        {
            icon: "puzzle",
            property: "repositories on GitHub",
            value: 0,
            type: "number"
        },
        {
            icon: "clock",
            property: "latest updated repository",
            linkName: "repository-name",
            linkHref: "#",
            linkInformations: "00 minutes ago",
            type: "link"
        }
    ],
    aboutTechnologies: [],
    works: [
        {
            name: "Telecom Control Panel",
            type: "interface",
            description: "OVH Control Panel Telecom UI - Official Repository",
            stats: [
                {
                    property: "Commits",
                    icon: "pen",
                    value: 0
                },
                {
                    property: "Contributors",
                    icon: "person",
                    value: 0
                },
                {
                    property: "since last update",
                    icon: "clock",
                    value: "0 mn"
                }
            ],
            tags: [],
            link: "https://github.com/ovh-ux/ovh-manager-telecom"
        },
        {
            name: "Cloud Control Panel",
            type: "interface",
            description: "OVH Control Panel Cloud UI - Official Repository",
            stats: [
                {
                    property: "Commits",
                    icon: "pen",
                    value: 0
                },
                {
                    property: "Contributors",
                    icon: "person",
                    value: 0
                },
                {
                    property: "since last update",
                    icon: "clock",
                    value: "0 mn"
                }
            ],
            tags: [],
            link: "https://github.com/ovh-ux/ovh-manager-cloud"
        },
        {
            name: "Web Control Panel",
            type: "interface",
            description: "OVH Control Panel Web UI",
            stats: [
                {
                    property: "Commits",
                    icon: "pen",
                    value: 0
                },
                {
                    property: "Contributors",
                    icon: "person",
                    value: 0
                },
                {
                    property: "since last update",
                    icon: "clock",
                    value: "0 mn"
                }
            ],
            tags: [],
            link: "https://github.com/ovh-ux/ovh-manager-web"
        },
        {
            name: "Dedicated UI Control Panel",
            type: "interface",
            description: "OVH Control Panel Dedicated UI",
            stats: [
                {
                    property: "Commits",
                    icon: "pen",
                    value: 0
                },
                {
                    property: "Contributors",
                    icon: "person",
                    value: 0
                },
                {
                    property: "since last update",
                    icon: "clock",
                    value: "0 mn"
                }
            ],
            tags: [],
            link: "https://github.com/ovh-ux/ovh-manager-dedicated"
        },
        {
            name: "Other projects",
            type: "listing",
            description: "Discover here some of the other projects, guidelines components... we have built.",
            items: [
                {
                    name: "ovh-ui-kit-bs",
                    description: "A Bootstrap theme for the OVH managers, based on ovh-ui-kit.",
                    link: "https://github.com/ovh-ux/ovh-ui-kit-bs"
                },
                {
                    name: "ovh-ui-kit",
                    description: "OVH UI Kit - Master UI Framework.",
                    link: "https://github.com/ovh-ux/ovh-ui-kit"
                },
                {
                    name: "ovh-ui-kit-documentation",
                    description: " Documentation for the OVH UI Kit.",
                    link: "https://github.com/ovh-ux/ovh-ui-kit-documentation"
                }
            ],
            link: "https://github.com/ovh-ux",
            linkLabel: "All our projects"
        },
        {
            name: "Publications",
            type: "listing",
            description: "As passionates about web development, we like sharing with you some of our experiences. These are some articles about topics that are dear to us (only in french, sorry ^^')",
            items: [
                {
                    name: "#OVHMeetup : Drupal et accessibilité web à l’heure des CMS API-First",
                    description: "Les CMS « API first », c’est-à-dire dotés d’interfaces d’édition de contenu minimalistes, mais...",
                    link: "https://www.ovh.com/fr/blog/ovh-meetup-drupal-accessibilite-web-cms-api-first/"
                },
                {
                    name: "[UX Labs] Que peut apporter l’UX à une interface en ligne de commande (CLI) ?",
                    description: "L’amélioration continue de l’espace client OVH, qui est une interface graphique, concentre...",
                    link: "https://www.ovh.com/fr/blog/ux-labs-interface-ligne-de-commande/"
                },
                {
                    name: "Libéré, délivré : le code de l’espace client OVH enfin open sourcé",
                    description: "Annoncée lors du Summit 2016, la libération du code source de l’espace client OVH est maintenant une réalité...",
                    link: "https://www.ovh.com/fr/blog/espace-client-ovh-code-libere-open-source/"
                }
            ],
            link: "https://www.ovh.com/fr/blog/ux",
            linkLabel: "All our publications"
        }
    ],
    contactMeans: [
        {
            name: "Discuss",
            icon: "speechbubble",
            description: 'Whether you have questions, suggestions or requests, feel free to discuss with us on <a class="link link--accented" href="https://gitter.im/ovh/ux" target="_blank" rel="noopener">Gitter</a>.'
        },
        {
            name: "Contribute",
            icon: "script",
            description: `Share with us your improvement ideas,
            tell us about a bug you\'ve found by creating <a class="link link--accented" href="https://github.com/ovh-ux/ovh-ux-guidelines/blob/master/.github/CONTRIBUTING.md#finding-wonderful-bugs" target="_blank" rel="noopener">
            an issue</a>. Or contribute to our open source interfaces and components on <a class="link link--accented" href="https://github.com/ovh-ux" target="_blank" rel="noopener">GitHub</a>.`
        },
        {
            name: "Join us",
            icon: "hands",
            description: `We are always seeking for talented people.
            If you have the ambition, the passion and want to do something new, <a class="link link--accented" href="https://careers.ovh.com/fr/" target="_blank" rel="noopener">please apply</a> : we will be very glad to meet you.`
        }
    ]
};
