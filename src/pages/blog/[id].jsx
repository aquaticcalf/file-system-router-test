import { useParams } from 'react-router-dom'

export default function BlogPost() {
    const { id } = useParams()
    return <div>blog post : {id}</div>
}