const PersonForm = (props) => {
    return (
        <form onSubmit={props.addNumber}>
            <div>
                name: <input value={props.name} onChange={props.onChangeName} />
            </div>
            <div>
                number: <input value={props.phone} onChange={props.onChangePhone} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm