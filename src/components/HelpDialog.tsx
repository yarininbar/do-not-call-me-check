import { Container, Typography } from '@mui/material';
import step1 from "../Assets/Images/howto1.png"
import step2 from "../Assets/Images/howto2.png"
import step3 from "../Assets/Images/howto3.png"



  
function HelpDialog(): JSX.Element {

  return (

        <Container style={{padding:"40px", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Typography fontWeight="bold" variant='h5'>הפקת פרטי הזדהות ממאגר ״אל תתקשר אליי״</Typography>
        <Typography mt={2} fontWeight="bold">שלב 1</Typography>
        <Typography>יש להתחבר <a href="https://dnc.fta.gov.il/business-homepage/" target="_blank">לאיזור האישי</a> בפורטל החברות של מאגר ״אל תתקשר אליי״</Typography>
        <Typography mt={2} fontWeight="bold">שלב 2</Typography>
       <Typography>בתפריט הצדדי, לחצו על ״Access Token"</Typography>
        <img width="170px" src={step1}/>
        <Typography mt={2} fontWeight="bold">שלב 3</Typography>
        <Typography>בחרו ב״יצירת חדש״</Typography>
        <Typography mt={2} fontWeight="bold">שלב 4</Typography>
        <Typography>הזינו שם עבור הטוקן, ולחצו על יצירה </Typography>
        <img width="170px" src={step2}/>
        <Typography mt={2} fontWeight="bold">שלב 5</Typography>
        <Typography>יתקבלו פרטי הזיהוי אותם יש להזין בשירות.</Typography>
        <img width="170px" src={step3}/>
        </Container>

  );
};

export default HelpDialog;
