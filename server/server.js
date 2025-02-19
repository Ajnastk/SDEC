const express=require('express');
const nodemailer=require('nodemailer');
const cors=require('cors');
const port= process.env.PORT||2000;

require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cors());

app.post('/send-email', async function(req,res){
    try {
        const {name,email,message} =req.body;
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
            },
        });

        const mailOptions={
            from:email,
            to:process.env.EMAIL_USER,
            subject:`New contact form submission from ${name}`,
            text:`Name: ${name}\nEmail: ${email}\nMessage:${message}`
        }
        await transporter.sendMail(mailOptions);
        res.status(200).json({message:'Email sent successfully'});
        
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).json({message:'Failed to email sent'});
    }
})

console.log(process.env.PORT);
console.log('using port is ',port)
app.listen(port,()=> console.log(`server is running successfully on port http://localhost/${port}`));

