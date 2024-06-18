import { Link } from "react-router-dom";
import { Network, ListTree, BarChartBig } from "lucide-react";

export const Sidebar = ()=>{
  const items = [
    { name: "Árvore", page: "Tree", icon: <Network /> },
    { name: "Lista", page: "List", icon: <ListTree /> },
    { name: "Gráfico", page: "Graphs", icon: <BarChartBig /> }
  ]

  return(
    <aside className="bg-slate-900 flex-1">
      <ul className="w-full">
        {items.map((item, _)=>(
          <li key={_}>
            <Link to={item.page} className="flex items-center p-4 text-white hover:bg-slate-800">
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}