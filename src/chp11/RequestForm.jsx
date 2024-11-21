import React, {useState} from "react";

function RequestForm() {
    const [details, setDetails] = useState('');

    const handleChange = (event) => {
        setDetails(event.target.value)
    }

    const handleSubmit = (event) => {
        alert(`상세 입력사항 : ${details}`)
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                요청사항:
                <textarea value={details} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default RequestForm;