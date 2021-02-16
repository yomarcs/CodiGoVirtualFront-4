import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/style.css'
import NotFound from './modules/404/NotFound'
import AdminRouter from './modules/admin/AdminRouter'
import PosRouter from './modules/pos/PosRouter'
// import Cargando from './modules/cargando/Cargando'
// import Productos from './modules/pos/screens/productos/Productos'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/admin"} component={AdminRouter} />
                <Route path={"/"} exact component={PosRouter}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter

