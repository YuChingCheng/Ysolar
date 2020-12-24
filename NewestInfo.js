// const { gql } = require('./node_modules/graphql-tag')
// import {gql} from './node_modules/graphql-tag'

new Vue({
    el: "#app",
    data: {
        articles: [],
    },
    mounted() {
        
    },
    methods: {
        
    },
    apollo: {
        articles() {
          return {
            query: gql`
            query GET_ARTICLES($condition: article_bool_exp!, $limit: Int, $orderBy: [article_order_by!]) {
              article(where: $condition, limit: $limit, order_by: $orderBy) {
                id
                title
                slug
                member {
                  id
                  name
                }
                featured_image_url
                youtube_cover_url
                online_at
                article_categories {
                  category {
                    id
                    name
                    slug
                  }
                }
                article_tags {
                  tag {
                    name
                  }
                }
              }
            }
          `,
            variables() {
              return {
                condition: { app: { app_domains: { domain: { _eq: location.host } } } },
                limit: 6,
                orderBy: [
                  {
                    weight: 'desc',
                    online_at: 'desc',
                  },
                ],
              }
            },
            update: data => {
              return data.article.map(article => ({
                id: article.id,
                title: article.title,
                member: article.member,
                featuredImageUrl: article.featured_image_url,
                youtubeCoverUrl: article.youtube_cover_url,
                onlineAt: article.online_at,
                categories: article.article_categories.map(article_category => article_category.category),
                tags: article.article_tags.map(article_tag => article_tag.tag.name),
              }))
            },
            result: () => {
                console.log(result);
              },
          }
        },
        categories() {
          return {
            query: GET_CATEGORIES_WITH_ARTICLES,
            variables() {
              return {
                appDomain: location.host,
                limit: 3,
              }
            },
            update: data => {
              this.slides = data.category
                .filter(category => category.article_categories.length > 0)
                .map(category => ({
                  id: category.article_categories[0].article.id,
                  title: category.article_categories[0].article.title,
                  member: category.article_categories[0].article.member,
                  featuredImageUrl: category.article_categories[0].article.featured_image_url,
                  youtubeCoverUrl: category.article_categories[0].article.youtube_cover_url,
                  onlineAt: category.article_categories[0].article.online_at,
                  categories: [
                    {
                      ...category,
                    },
                  ],
                  tags: category.article_categories[0].article.article_tags.map(article_tag => article_tag.tag.name),
                }))
              return data.category.map(category => ({
                id: category.id,
                name: category.name,
                slug: category.slug,
                articles: category.article_categories.map(article_category => ({
                  id: article_category.article.id,
                  title: article_category.article.title,
                  member: article_category.article.member,
                  featuredImageUrl: article_category.article.featured_image_url,
                  youtubeCoverUrl: article_category.article.youtube_cover_url,
                  onlineAt: article_category.article.online_at,
                  categories: [
                    {
                      ...category,
                    },
                  ],
                  tags: article_category.article.article_tags.map(article_tag => article_tag.tag.name),
                })),
              }))
            },
            result: () => {
              this.$Progress.finish()
            },
          }
        },
    },
    
})