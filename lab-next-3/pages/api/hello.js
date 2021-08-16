import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if(req.method=='POST')
  {
    const email=req.body.email;
    const feedback=req.body.text;
    const newFeedback={
      id:new Date().toISOString(),
      email:email,
      text:feedback
    };

    const filepath=path.join(process.cwd(),'data','feedback.json');
    const fileData=fs.readFileSync(filepath);
    let data=[];
    if(fileData!='')
    {
      data=JSON.parse(fileData);
    }
    data.push(newFeedback);
    fs.writeFileSync(filepath,JSON.stringify(data));
    res.status(201).json({message:"Success !",feedback:newFeedback});
    //store this data in datavase or a file
  }
  else{
    res.status(200).json({ message: 'I am firts API' })
  }
}
