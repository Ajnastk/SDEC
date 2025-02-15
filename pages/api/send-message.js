import nodemailer from "nodemailer";

export default async function handler(req,res){
    if(req.method != "POST"){
        return res.status(405).json({message:"method not allowed"});
    }

    const {name,email,message}= req.body;

    if(!name || !email || !message){
        return res.status(400).json({message:"All fields are required"});
    }
    //configuration of nodemailer transporter

    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            replyTo:email, //allows replaying to sender
            to:process.env.EMAIL_USER,  //your email where you recieve messages
            subject:`New contact message from ${name}`,
            text:`Email: ${email}\nMessage: ${message}`,
        });
        return res.status(200).json({message:'Message sent successfully'});
    } catch (error) {
        return res.status(500).json({message:'Failed to sent message', error})
    }
}