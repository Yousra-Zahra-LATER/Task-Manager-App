import { Route, Routes, useLocation, Navigate, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Tasks } from "./pages/Tasks";
import { Trash } from "./pages/Trash";
import { TaskDetails } from "./pages/TaskDetails";
import { Users } from "./pages/Users";

function Layout() {
  const user = ""; // Vous pouvez initialiser cela à un objet utilisateur s'il est connecté

  const location = useLocation(); // Obtenez l'objet location actuel

  return user ? ( // Si l'utilisateur est connecté
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/* SideBar*/}
      </div>
      {/* MobileBar */}
      <div className="flex-1 overflow-auto">
        {/* NavBar */}
        <div className="p-4 2xl:px-10">
          {/*Il agit comme un point de rendu dynamique dans votre composant parent (layout) où 
          les composants enfants rendus par les routes sont affichés. */}
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    // Si l'utilisateur n'est pas connecté 
    <Navigate to="/log-in" state={{ from: location }} replace />
  );
}

function App() {
  return (
    <main className=" w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout/>}>
          {/*définit la mise en page de lapplication/ route parente/ agit comme un conteneur fixe pour toute lapplication*/}
          {/*les routes de ses enfants qui changent */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status >" element={<Tasks />} />
          <Route path="/in-progress/:status >" element={<Tasks />} />
          <Route path="/todo/:status >" element={<Tasks />} />
          <Route path="/team >" element={<Users />} />
          <Route path="/trashed >" element={<Trash />} />
          <Route path="/task/:id >" element={<TaskDetails />} />
        </Route>
        <Route path="/log-in" element={<Login />} />
      </Routes>
      <Toaster richColors />
    </main>
  );
}

export default App;
