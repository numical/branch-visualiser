export default {
    repos: [
        {
            name: 'cpt-scv-api',
            description: "Private API",
            branches: [
                {
                    name: 'release/19.13',
                    start: '11/08/19'
                },
                {
                    name: 'release/19.15',
                    start: '01/08/19'
                },
                {
                    name: 'feature/xxx',
                    start: '13/08/19'
                }
            ]
        },
        {
            name: 'fpr-scv-ui',
            description: "UI Monorepo",
            branches: [
                {
                    name: 'olive-develop',
                    start: '10/07/19'
                },
                {
                    name: 'feature/yyy',
                    start: '04/08/19'
                }
            ]
        }
    ]
}
