import "../css/studentListStudent.css"

export function Student({ data, header }) {
    return <>
        <div className={`studentList ${header === true ? "tableHeader": ""}`} id={`student-${data.id}`}>
            <div className="table-number">{data.number}</div>
            <div className="table-ci">{data.ci}</div>
            <div className="table-names">{data.names}</div>
            <div className="table-lastNames">{data.lastNames}</div>
            <div className="table-lapso">{data.lap1}</div>
            <div className="table-lapso">{data.lap2}</div>
            <div className="table-lapso">{data.lap3}</div>
            <div className="table-lapso">{data.def}</div>
        </div>
    </>
}