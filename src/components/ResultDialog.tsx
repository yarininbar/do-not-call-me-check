import { Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import CheckIcon from '@mui/icons-material/Check';


interface ResultDialogProps {
  isOpen: boolean;
  result: boolean;
}

function ResultDialog(props: ResultDialogProps): JSX.Element {

    const okMessage = "מספר זה אינו רשום למאגר"
    const noMessage = "מספר זה רשום למאגר";

  
  return (

      <div className='result-dialog'>
       <DialogContent>
       <DialogTitle align='center'>הבדיקה הושלמה</DialogTitle>

       <Typography align='center'>      
       {(props.result == true) ? 
       <CheckIcon color="success" sx={{ fontSize: "80px" }}/>
       : 
       <DoDisturbIcon color="error" sx={{ fontSize: "80px" }}/> }

       </Typography>
           <Typography fontWeight='bold' align='center'>{
           (props.result == true) ? okMessage : noMessage
           }</Typography>
            <Typography align='center'>{
           (props.result == true) ? 'ניתן לבצע שיחת טלמרקטינג' : 'לא ניתן לבצע שיחת טלמרקטינג'
           }</Typography>
       </DialogContent>
      </div>

  );
};

export default ResultDialog;
