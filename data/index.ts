import { StackList } from './types'

const stacklist: StackList = [
  {
    name: 'frontend',
    stacks: [
      {
        title: 'Next JS',
        image: '/images/next_1.png',
        level: 3,
      },
      {
        title: 'React JS',
        image: '/images/react.webp',
        level: 3,
      },
      {
        title: 'Typescript',
        image: '/images/typescript.png',
        level: 3,
      },
      {
        title: 'Javascript',
        image: '/images/javascript.png',
        level: 3,
      },
      {
        title: 'Tailwind CSS',
        image: '/images/tailwind.png',
        level: 3,
      },
      {
        title: 'SASS · SCSS',
        image: '/images/scss.png',
        level: 2,
      },
    ],
  },
  {
    name: "backend",
    stacks: [
      {
        title: 'Firebase',
        image: '/images/firebase.png',
        level: 3,
      },
      {
        title: 'GraphCMS',
        image: '/images/graphcms.png',
        level: 3,
      },
      {
        title: 'Node JS',
        image: '/images/node.png',
        level: 2,
      },
      {
        title: 'GraphQL',
        image: '/images/graphql.webp',
        level: 2,
      },
      {
        title: 'MongoDB',
        image: '/images/mongo.png',
        level: 1,
      },
    ]
  },
  {
    name: "DevOps",
    stacks: [
      {
        title: 'Docker',
        image: '/images/docker.webp',
        level: 1,
      },
    ]
  }
]

export { stacklist }
