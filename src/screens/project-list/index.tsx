import { List } from "./list";
import { SearchPannel } from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "../../util";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  // 状态提升， 输入参数
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  // State: list
  const [list, setList] = useState([]);

  // State: users
  const [users, setUsers] = useState([]);

  // custom hook
  const debouncedParam = useDebounce(param, 2000);

  // initialize: load List from backend
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParam]);

  // init users
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchPannel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
