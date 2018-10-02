const Entries = (props) => (
    <ul>
        {props.data
            ? props.data.map(entry => {
                return <li key={entry._id}>{entry.name}, {entry.age}</li>
            })
            : null }
    </ul>
)

export default Entries