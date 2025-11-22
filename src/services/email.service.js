// service fuction to sendEmail

const nodemailer = require("nodemailer");
const dotenv=require("dotenv")
dotenv.config();
// conffig:- we can access all the values from env file

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    },

});

const sendEmail = async (subject,to,body) => {
    
     await transporter.sendMail({
        from:process.env.EMAIL_USER,
        to,
        subject,
        text:body,
     });
     return "Email sent successfully"

    
};


module.exports= {sendEmail} ;

