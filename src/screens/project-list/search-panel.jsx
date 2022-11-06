
// 解构赋值
export const SearchPannel = ({users, param, setParam}) => {

    return <form action="">
        <div>
            {/* Filter System name */}
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })} />

            {/* Filter User Id */}
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            }) }>
                <option value={''}>Manager</option>
                {
                    users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}