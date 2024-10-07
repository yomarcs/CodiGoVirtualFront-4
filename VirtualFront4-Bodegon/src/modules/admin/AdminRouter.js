import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFoundAdmin from './../404/NotFoundAdmin'
import "./AdminRouter.css"
import AdminHeader from './components/AdminHeader'
import AdminCategoriasScreen from './screens/categorias/AdminCategoriasScreen'
import AdminMarcasScreen from './screens/marcas/AdminMarcasScreen'
import AdminProductosScreen from './screens/productos/AdminProductosScreen'
import AdminTiposScreen from './screens/tipos/AdminTiposScreen'

const AdminRouter = () => {
    return (

      <>
        <AdminHeader />
        <div className="bg-dark altura">
        <Switch>
          <Route path={"/admin/categorias"} component={AdminCategoriasScreen}/>
          <Route path={"/admin/tipos"} component={AdminTiposScreen}/>
          <Route path={"/admin/marcas"} component={AdminMarcasScreen}/>
          <Route path={"/admin"} exact component={AdminProductosScreen}/>
          <Route component={NotFoundAdmin} />
        </Switch>
        </div>
      </>
      
    )
}

export default AdminRouter
