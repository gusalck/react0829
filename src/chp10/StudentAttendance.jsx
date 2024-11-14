import React from "react";


function StudentAttendance(props) {
    const student = props.students;
    return(
        <div>
            <h1>학생출석부</h1>
            <ul>
                {
                    student.map((student)=> (
                        <li key={student.id}>
                            <b>{student.name}</b> - {student.grade}학년,
                            전공 : {student.major}과
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default StudentAttendance;