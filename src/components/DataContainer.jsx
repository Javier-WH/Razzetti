import "../css/dataContainer.css"

import { SeccionName } from "./SeccionNameContainer"
import {StudentData} from "./StudentData"


export function DataContainer() {

    return <>
        <div id="dataContainerPannel">
            <SeccionName />
            <StudentData />
        </div>
    </>
}