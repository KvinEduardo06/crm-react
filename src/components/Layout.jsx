import { Link, Outlet, useLocation } from "react-router-dom"

function Layout() {

  const location = useLocation();
  
  return (
    <div className="md:flex md:min-h-screen">

      {/* menu lateral */}
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-white text-center">CRM-Clientes</h2>



        {/* opciones del menu */}
        <nav className="mt-10">
          <Link className={`${location.pathname === '/' ? 'text-blue-500' :
            'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`} to="/">Clientes</Link>




          <Link className={`${location.pathname === '/clientes/nuevo' ? 'bg-blue-400' :
            'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`}  to="/clientes/nuevo">Nuevo Cliente</Link>
        </nav>

      </aside>

      {/* contenido  */}
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
