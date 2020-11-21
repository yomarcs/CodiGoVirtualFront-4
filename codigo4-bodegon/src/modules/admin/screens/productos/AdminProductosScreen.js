import React from 'react'
import AdminProductosForm from './components/AdminProductosForm'
import AdminProductosTable from './components/AdminProductosTable'

const AdminProductosScreen = () => {
    return (
      <main className="container-fluid">
        <h1 className="display-4 text-primary mt-4">El Bodegón App - Admin Productos</h1>
        <hr className="bg-light"/>
        <AdminProductosForm />
        <AdminProductosTable />
      </main>
    )
}

export default AdminProductosScreen
