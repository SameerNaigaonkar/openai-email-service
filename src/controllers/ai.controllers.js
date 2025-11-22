const {generateEmailText }= require("../services/ai.services");
const {sendEmail }= require("../services/email.service");


const generateEmail=async (req,res) => {

    try {
        const {prompt,to,sendEmail: shouldsend}=req.body;
     if(!prompt)return res.status(400).json({message:"prompt is required"});

     const aiText = await generateEmailText(prompt);
     const subject = aiText.split("\n")[0] || "Generated Email";
     const body = aiText.replace(subject," ").trim();

     if(shouldsend && to){
        await sendEmail(subject,to,body);
        return res.status(200).json({
            subject,
            body,
            status:"sent"
        });

     }
      
      res.status(200).json({
        subject,
        body,
        status:"generated"
      });

      

    } catch (error) {
        res.status(500).json({
            message:error.message
        });
        
    }
    
};


module.exports = {generateEmail};