let people = []

const addPerson = async (req, res)=>{
    const {name, age}=req.body;
    people[people.length] = req.body; 
    if (!name){
        res.status(400).json({error:'Please enter a name.'});
    } 
    res.status(200).json({people, msg:"A person record was added"});
}


const getPeople = async (req, res)=>{
    res.status(200).json(people);
}

const getPerson = async (req, res)=>{
    const index = Number(req.params.id);
    console.log (index);  
    res.status(200).json(people[index]);
}

module.exports ={
    addPerson, 
    getPeople, 
    getPerson
}