export interface Note {
  id: number
  title: string
  content: string
  date: string
}
export interface NotesProps {
  setNote: React.Dispatch<React.SetStateAction<Note[]>>
}
export interface NoteListProps {
  note: Note[]
}
