import { Box, Button, Card, CardContent, Container, Dialog, TextField, Typography } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import globals from "../../services/Globals";
import ResultDialog from "../ResultDialog";
import LoadingDialog from "../LoadingDialog";
import { CredentialsModel } from "../../models/CredentialsModel";
import SetCredentials from "../SetCredentials";
import store from "../../redux/Store";
import ErrorDialog from "../ErrorDialog";


  
  
function Main(): JSX.Element {
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
      setOpen(false);
    };  
    


    const [phone, setPhone] = useState<string>("");
    const [result, setResult] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [displayError, setDisplayError] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>("");

    const [userCredentials, SetUserCredentials] = useState<CredentialsModel | undefined>(store.getState().credentialsReducer.credentials);


useEffect(() => {
   

    const unsubscribe = store.subscribe(() => {
      SetUserCredentials(store.getState().credentialsReducer.credentials);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  
    
    const phoneQuery = async () => {

      const requestBody = {
        "phone": phone,
        "token": store.getState().credentialsReducer.credentials?.token,
        "name": store.getState().credentialsReducer.credentials?.identifier
      };

        if(phone.length >= 9 && phone.length <= 10 && phone.startsWith("0")) {
          setLoading(true);
          axios.post<boolean>(globals.urls.phoneQuery, requestBody)
         .then((res) => {
          console.log(res.data);
          setResult(res.data);
          setOpen(true);
          setLoading(false);
  

         })
         .catch((error: AxiosError) => {
          setDisplayError(true);
          setMsg(error.message)
            setLoading(false);
        })
        } else {
          setDisplayError(true);
            setMsg("זה לא נראה כמו מספר טלפון. נסה שנית.");
        }
    }


    return (
        <div className="Main">  

<LoadingDialog isLoading={loading} />

<Typography mb={2} align="center" variant="body1" gutterBottom>
              שירות זה מאפשר לבדוק האם מספר טלפון רשום למאגר ״אל תתקשר אליי״.
              <br />
              הוא נוצר בהמשך
              לתיקון החקיקה לחוק הגנת הצרכן (תיקון מס' 61) להגבלת פניות שיווקיות.
              <br />
              שירות זה נוצר בהתנדבות, ואינו מתוחזק ע״י הרשות לסחר הוגן.
              <br />
              יש להפעיל שיקול דעת בשימוש בשירות זה, ובכל מקרה, האחריות על השימוש בשירות חלה על המשתמש בלבד.
            </Typography>



      {!userCredentials &&
      <SetCredentials/>
      }



    <Dialog open={displayError} onClose={() => setDisplayError(false)}>
      <ErrorDialog msg={msg}/>
      </Dialog>
      



       {userCredentials &&
     <>
     <Dialog open={open}>
            <ResultDialog isOpen={open} result={result} />
            <Button
              onClick={handleClose}> אישור </Button>
          </Dialog>
          
          <Card className="main-card">
              <Typography align='center' fontWeight="bold" mt={5}>
                הזן מספר טלפון לבדיקה
              </Typography>
              <Typography align='center'>
                יש להזין מספר טלפון בן 9-10 ספרות, ללא קידומת מדינה
              </Typography>

              <CardContent>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="הזן מספר טלפון"
                  type="phone"
                  onChange={e => (setPhone(e.target.value))} />
                <Container style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Button className="app-button" variant="outlined" onClick={phoneQuery}>בדיקה במאגר</Button>
                </Container>
              </CardContent>
            </Card>
            </>
      
       }
        </div>
    );

    
}

export default Main;