export interface Note {
  id: number
  title: string
  content: string
  date: string
}
export interface NotesProps {
  note: Note[]
  setNote: React.Dispatch<React.SetStateAction<Note[]>>
}
