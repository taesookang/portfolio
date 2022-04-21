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
  title: string
  stacks: string[]
  desc: string
  video: string
  website: string
  github: string
}

export type { IStack, IStackCategory, IProject, StackList }
