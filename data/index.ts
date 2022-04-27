import { IProject, StackList } from './types'

const stacklist: StackList = [
  {
    name: 'frontend',
    stacks: [
      {
        title: 'Next JS',
        image: '/images/next.png',
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
    name: 'backend',
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
    ],
  },
  {
    name: 'DevOps',
    stacks: [
      {
        title: 'Docker',
        image: '/images/docker.webp',
        level: 1,
      },
    ],
  },
]

const projects: IProject[] = [
  {
    id: 1,
    title: 'instagrid',
    stacks: ['Next JS', 'Typescript', 'Tailwind CSS', 'Firebase'],
    desc: [
      'Instagram is one of the most frequently used apps for me, and I often thought about cloning it when I used the app.',
      'Although there were already a plenty of Instagram cloned app built by other developers, I wanted to build my own version of the app with detailed UI cloning, utilizing my own logic and abilities to solve problems. Here is the outcome.',
    ],
    url: 'https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/instagrid.mp4?alt=media&token=451f8d60-183e-4ce0-8df0-88e34791d978',
    thumbnail: '/thumbnails/instagrid.png',
    website: 'https://instagrid.vercel.app/',
    github: 'https://github.com/taesookang/instagrid',
  },
  {
    id: 2,
    title: 'noogle',
    stacks: ['Next JS', 'Tailwind CSS', 'RapidAPI'],
    desc: [
      'This is a Google search cloned app as a part of my personal projects using third party API(Rapid API) and it allows users to search websites, news, images and videos by simply typing in search term.',
      'The main reason why I built this app is that I wanted to try out SSR(Server Side Rendering) with Next JS.',
    ],
    url: 'https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/noogle.mp4?alt=media&token=943ab762-952a-4a10-9721-2fa4b3520e9f',
    thumbnail: '/thumbnails/noogle.png',
    website: 'https://noogle-taesoo.vercel.app/',
    github: 'https://github.com/taesookang/noogle',
  },
  {
    id: 3,
    title: 'soju haus',
    stacks: ['Next JS', 'Tailwind CSS', 'GraphCMS'],
    desc: [
      'A Restaurant web app which offers categorized food menu, events, photos of the restaurant, and link to reservation webpage.',
      'This is my first project with a CMS(Content Management System) tool and I chose to use GraphCMS among lots of CMS productions for my project, because they use GraphQL as data fetching method which I am quite familiar with.',
    ],
    url: 'https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/soha.mp4?alt=media&token=78b0a0c7-9545-42c1-89b0-271d3a105d83',
    thumbnail: '/thumbnails/soha.png',
    website: 'https://soha.vercel.app/',
    github: 'https://github.com/taesookang/soha',
  },
  {
    id: 4,
    title: 'moovle',
    stacks: ['React JS', 'SCSS', 'TMDB'],
    desc: [
      'This is my first project with React JS utilizing third party API(TMDB), which is an user-friendly web application that offers watchlist service and movie search by categories and query with detailed information and a short trailer for each result.',
    ],
    url: 'https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/moovle.mp4?alt=media&token=710c4fa9-1e45-4f37-b8f1-e8cd1fba89da',
    thumbnail: '/thumbnails/moovle.png',
    website: 'https://taesookang.github.io/moovle/',
    github: 'https://github.com/taesookang/moovle',
  },
]

export { stacklist, projects }
