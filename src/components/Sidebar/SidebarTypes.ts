export interface TSelectItem {
  to: string
  icon: JSX.Element
  selectTitle: string
}

export interface TSidebarSection {
  title: string
  selects: TSelectItem[]
}

export interface TSidebar {
  [key: string]: TSidebarSection
}
