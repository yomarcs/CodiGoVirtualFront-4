import React from 'react'
import AdminMarcasForm from './components/AdminMarcasForm'
import AdminMarcasTable from './components/AdminMarcasTable'

const AdminMarcasScreen = () => {
    return (
      <main className="container">
        <h1 className="display-4 text-primary mt-4">El Bodegón App - Admin Marcas</h1>
        <hr className="bg-light"/>
        <AdminMarcasForm />
        <AdminMarcasTable />
      </main>
    )
}

export default AdminMarcasScreen
