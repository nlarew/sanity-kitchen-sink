export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebb1a66ebdb89017ff6c5f8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kjvy8e2o',
                  apiId: '3be1f9eb-69d4-4bb4-8454-e2ef3f486676'
                },
                {
                  buildHookId: '5ebb1a6666e83c0189bda612',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-x4i43tn4',
                  apiId: 'f893b808-5ad4-490d-a441-a9b0337c5668'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nlarew/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-x4i43tn4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
