const parkingLot = require('../schema/parkingLotSchema');


exports.homePage = async(req, res)=>{
    res.send('running now!');
}

exports.createParking = async(req,res)=>{
    delete req.body.avilability;
    parkingLot.create(req.body,
        function (err, object) {
        if (err) return res.status(403).send(err);
        object.save(function (err) {
            if (err) return res.status(500).send(err);
                res.json(req.body);
        });
    });
}

exports.getParking = async(req,res)=>{
    parkingLot.find(req.query,(err,parkings)=>{
        res.json(parkings);
    })
}

exports.updateParking = async(req, res)=>{
    delete req.body.avilability;
    parkingLot.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true},(err, updatedRecord)=>{
        if(err) return res.send(err);
        res.json(updatedRecord);
    });
}

exports.deleteParking = async(req, res)=>{
    parkingLot.findByIdAndRemove({_id:req.params.id},(err, deletedRecord)=>{
        if(err) return res.send(err);
        res.json(deletedRecord);
    });
}

exports.addParkingAvilability = async(req, res)=>{
    parkingLot.findByIdAndUpdate(
            {_id:req.params.id},
            {
                $push:{
                    avilability:{
                        time:new Date(),
                        seats:req.body.avilability
                    }
                }
            },{new:true},
            (err, updatedRecord)=>{
                if(err) return res.send(err);
                res.json(updatedRecord);
            }
    )
}