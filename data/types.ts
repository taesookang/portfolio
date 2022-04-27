interface IStack {
  title: string
  image: string
  level: 1 | 2 | 3
}

interface IStackCategory {
  name: string
  stacks: IStack[]
}

type StackList = IStackCategory[]

interface IProject {
  id: number
  title: string
  stacks: string[]
  desc: string[]
  url: string
  thumbnail: string
  website: string
  github: string
}

export type { IStack, IStackCategory, IProject, StackList }
