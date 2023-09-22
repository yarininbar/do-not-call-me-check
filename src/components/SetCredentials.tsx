import { AutoFixHigh, DeleteOutline, Help, HelpOutline, HelpOutlineRounded, QuestionAnswerOutlined, QuestionMarkOutlined, QuestionMarkRounded, SettingsOutlined } from "@mui/icons-material";
import { Button, Card, CardContent, Container, Dialog, Divider, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import store from "../redux/Store";
import { CredentialsModel } from "../models/CredentialsModel";
import { removeCredentialsAction, setCredentialsAction } from "../redux/CredentialsState";
import HelpDialog from "./HelpDialog";



interface SetCredentialsProps {
  edit?: boolean;
}

  
function SetCredentials(props: SetCredentialsProps): JSX.Element {


    const [token, setToken] = useState<string>("");
    const [identifier, setIdentifier] = useState<string>("");
    const [openHelp, setOpenHelp] = useState<boolean>(false);

    const handleSubmit = () => {

      const newCredentials = new CredentialsModel(token, identifier);
      store.dispatch(setCredentialsAction(newCredentials));
      console.log(store.getState().credentialsReducer.credentials);
    };

    const handleDelete = () => { 
      store.dispatch(removeCredentialsAction());
      window.location.reload();

    };

    return (


<Card className="main-card">
<Typography align='center' fontWeight="bold" mt={5}>
  {props.edit ? "עריכת פרטי ההזדהות מול מאגר אל תתקשר אליי" : "כדי להתחיל, יש להזין את פרטי ההזדהות שקיבלת בפורטל החברות של מאגר אל תתקשר אליי"}

                            </Typography>
              <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {!props.edit &&
              <Button onClick={() => setOpenHelp(true)}>
    <HelpOutline />
איך מקבלים פרטי זיהוי?
  </Button>
  }


<Dialog open={openHelp} onClose={() => setOpenHelp(false)}>
<HelpDialog/>
</Dialog>

                </Container>
              <CardContent>

                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="הזן Access token "
                  type="phone"
                  onChange={e => (setToken(e.target.value))} />
                 
<br/>
<br/>

                   <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="הזן Identifier"
                  type="phone"
                  onChange={e => (setIdentifier(e.target.value))} />

                <Container style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Button fullWidth  className="app-button" variant="outlined" onClick={handleSubmit}>{props.edit ? "אישור" : "התחברות"}</Button>
             {props.edit &&     
             
             <Button style={{marginTop:"5px"}} fullWidth className="app-button" color="error" variant="outlined" onClick={handleDelete}>
        <DeleteOutline />
מחיקת פרטי הזדהות 
 </Button>    
}
                </Container>
              </CardContent>
            </Card>



    );

    
}

export default SetCredentials;