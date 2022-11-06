import { List } from "./list"
import { SearchPannel } from "./search-panel"
import { useEffect, useState } from "react"
import { cleanObject, useMount } from "../../util"
import * as qs from "qs"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {

    // 状态提升
    // 输入参数：
    const [param, setParam] = useState({
        name: '',
        personId: '',
    })

    // list
    const [list, setList] = useState([])

    // users
    const [users, setUsers] = useState([])

    // custom hook
    

    // initialize: load List from backend
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
            if(response.ok) {
                setList(await response.json())
            }
        })
    }, [param])

    // init users
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok) {
                setUsers(await response.json())
            }
        })
    })

    return <div>
        <SearchPannel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}