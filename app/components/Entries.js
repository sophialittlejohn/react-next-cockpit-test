const imgStyle = {
    width: '30%',
    height: '30%',
}

const pageStyle = {
    border: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    margin: '10px 0',
    padding: '10px',
}


const Entries = (props) => (
    <div>
        {props.entries
            ? props.entries.map(entry => {
                return (
                    <div style={pageStyle} key={entry._created}>
                        <h1>{entry.Heading1}</h1>
                        <h3>{entry.Heading2}</h3>
                        <p>{entry.Content}</p>
                        <img style={imgStyle} src={entry.ProfilePicture.path} alt={entry.ProfilePicture.title}/>
                    </div>
                )
            })
            : null}
    </div>
)

export default Entries