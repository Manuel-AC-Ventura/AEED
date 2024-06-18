import { Tree } from "./pages/Tree";
import { List } from "./pages/List";
import { Sidebar } from "./components/Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return(
    <BrowserRouter>
      <div className="h-screen flex flex-grow">
        <Sidebar />
        <div className="h-screen flex-[11] p-4">
          <Routes>
            <Route path="/" element={<Tree/>} />
            <Route path="/Tree" element={<Tree/>} />
            <Route path="/List" element={<List/>} />
            <Route path="*" element={<div className="text-white">Rota não encontrada</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}