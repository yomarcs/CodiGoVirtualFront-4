import React from 'react'
import AdminCategoriasForm from './components/AdminCategoriasForm'
import AdminCategoriasTable from './components/AdminCategoriasTable'

const AdminCategoriasScreen = () => {
    return (
      <main className="container">
        <h1 className="display-4 text-primary mt-4">El Bodegón App - Admin Categorias</h1>
        <hr className="bg-light"/>
        <AdminCategoriasForm />
        <AdminCategoriasTable />
      </main>
    )
}

export default AdminCategoriasScreen
