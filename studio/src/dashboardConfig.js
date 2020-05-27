export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ece2c9064c8193273774ae2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wu68t9ej',
                  apiId: 'f2c2996b-54c6-4fa3-81f6-c05b63dc2d34'
                },
                {
                  buildHookId: '5ece2c90219b3ec80412c9f2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zy7y8a9k',
                  apiId: 'c13ed017-23fe-47a3-b8b0-f8e26b4455e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ayushlinefinancial/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zy7y8a9k.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
