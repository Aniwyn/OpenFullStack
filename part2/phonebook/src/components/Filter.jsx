const Filter = (props) => {
    return(
        <div>
            filter shown with <input value={props.search} onChange={props.onChangeSearch}/>
        </div>
    )
}

export default Filter