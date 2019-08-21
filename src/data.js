export default {
    repos: [
        {
            name: 'cpt-scv-api',
            description: "Private API",
            branches: [
                {
                    name: 'release/19.13',
                    description: 'node upgrade; HSDS',
                    start: '11/08/19',
                    team: 'olive'
                },
                {
                    name: 'release/19.15',
                    description: 'monorepo',
                    start: '01/08/19',
                    team: 'black'
                },
                {
                    name: 'feature/xxx',
                    description: 'xxx',
                    start: '13/08/19',
                    end: '17/08/19',
                    team: 'yellow'
                }
            ]
        },
        {
            name: 'fpr-scv-ui',
            description: "UI Monorepo",
            branches: [
                {
                    name: 'olive-develop',
                    description: 'team-specific master',
                    start: '10/07/19',
                    team: 'olive'
                },
                {
                    name: 'feature/yyy',
                    description: 'yyy',
                    start: '04/08/19',
                    end: '12/08/19',
                    team: 'olive'
                }
            ]
        }
    ]
}
