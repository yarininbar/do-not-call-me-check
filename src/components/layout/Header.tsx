import { DocumentScannerOutlined, HelpOutline, SettingsOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import LoadingDialog from "../LoadingDialog";
import { useEffect, useState } from "react";
import SetCredentials from "../SetCredentials";
import store from "../../redux/Store";
import { CredentialsModel } from "../../models/CredentialsModel";

function Header(): JSX.Element {
    
    const [userCredentials, SetUserCredentials] = useState<CredentialsModel | undefined>(store.getState().credentialsReducer.credentials);


    useEffect(() => {
   

        const unsubscribe = store.subscribe(() => {
          SetUserCredentials(store.getState().credentialsReducer.credentials);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    const [open, setOpen] = useState<boolean>(false);


    return (
        <div className="header">
            <Box className="header-content" >
        <Typography variant="h5">כלי לבדיקת מספרי טלפון מול מאגר ״אל תתקשר אליי״</Typography>
        <div className="nav">

        <Button className="app-button" variant="outlined" href="https://www.gov.il/he/service/do-not-call-me">
        <DocumentScannerOutlined />
הנחיות החוק
  </Button>
        
  <Button disabled={!userCredentials}  className="app-button" variant="outlined"  onClick={() => setOpen(true)}>
        <SettingsOutlined />
הגדרות פרטי הזדהות 
 </Button>      
  </div>
        </Box>
      
      
        <Dialog open={open} onClose={() => setOpen(false)} >
<SetCredentials edit/>
</Dialog>

         </div>
         
    );
}

export default Header;