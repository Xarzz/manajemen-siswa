"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogFooter, DialogTitle, DialogClose, DialogTrigger, Dialog } from "../ui/dialog";
import { Button } from "../ui/button";
import FormFields from "../layout/FormFields";

export default function EditSiswaDialog({
    open,
    setOpen,
    data,
    handleChange,
    handleUpdate,
    dataKelas,
}:  any) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>Edit Siswa</DialogTitle>
                <DialogDescription>
                    Silakan masukan data siswa yang ingin diedit.
                </DialogDescription>
            </DialogHeader>
            <FormFields data={data} onChange={handleChange} kelas={dataKelas} />
            <DialogFooter className="flex justify-end gap-2">
               <Button variant="outline" onClick={() => setOpen(false)}>Batal</Button>
               <Button className="bg-yellow-500 text-white" onClick={handleUpdate}>Tambah</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
    )
}