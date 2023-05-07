const File = require("../models/File");

exports.LocalFileUpload = async (req,res) =>{
    try{

        //fetch file
        const file = req.files.file;
        console.log(file);

        let path = __dirname + "/files/" + Date.now();

        file.mv(path, (err)=>{
            console.log(err);
        })

        return res.status(202).json({
            success:true,
            message:"local file upload successfully",
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:'file not upload',
        });
    }
}
