export interface Monster {
  id: string
  name: string
  email: string
}

export interface SearchBoxProps {
  placeholder: string
  handleChange: (e: string) => void
}

export interface CardListProps {
  filteredMonsters: Monster[] 
}

export interface CardProps {
  monster: Monster
}