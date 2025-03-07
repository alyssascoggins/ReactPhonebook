import { useState } from 'react'
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90},
    { field: 'name', headerName: 'Contact Name', flex:1 },
    { field: 'email', headerName: 'Email', flex:1 },
    { field: 'phone_number', headerName: 'Phone Number', flex: 1 },
    { field: 'address', headerName:'Address', flex: 2}
]


function DataTable() {
    let [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const[ selectionModel,setSelectionModel ] = useState<any>([])
    

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        console.log('Selection model: ${selectionModel}')
        setTimeout( () => { window.location.reload()}, 500)
    }

    return (
    <>
        <Modal
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Contact
                </button>
            </div>
            <Button onClick={handleOpen}className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white">Update</Button>
            <Button onClick={deleteData}className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white">Delete</Button>
        </div>
        {/* Buttons section for controlling CRUD */}
        <div className={ open ? "hidden" : "containe mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%' }}
            >
                <h2 className="p-3 bg-slate-300 my2 rounded">My Contacts</h2>
                <DataGrid rows={contactData} columns={columns}
                checkboxSelection={true}
                onRowSelectionModelChange={ (item: any) => {
                    setSelectionModel(item)
                }}
                />
        </div>
    </>
  )
}

export default DataTable