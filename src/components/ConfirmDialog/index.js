import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, } from '@material-ui/core'
import ConfirmButton from "../ConfirmButton/index"
export default function ConfirmDialog(props) {
    const { confirmDialog, setConfirmDialog } = props;
    return (
        <Dialog open={ confirmDialog.isOpen }>
            <DialogTitle>

            </DialogTitle>
            <DialogContent>
                <Typography variant='h6' >
                    { confirmDialog.title }
                </Typography>
                <Typography variant='subtitle2' >
                    { confirmDialog.subTitle }
                </Typography>
            </DialogContent>
            <DialogActions>
                <ConfirmButton
                    text="No"
                    onClick={ () => setConfirmDialog({ ...confirmDialog, isOpen: false }) }
                />
                <ConfirmButton
                    text="Yes"
                    onClick={ confirmDialog.onConfirm }
                />
            </DialogActions>
        </Dialog>
    )
}
