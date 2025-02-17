import { useParams } from 'react-router-dom'

export default function AuthorName() {
    const { author_name } = useParams()
    return <div>author name : {author_name}</div>
}