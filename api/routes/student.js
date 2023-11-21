const express = require('express');
const router = express.Router();
const Student = require('../model/student');
const { default: mongoose } = require('mongoose');
const student = require('../model/student');

//POST or Create
router.post('/', async (req, res, next) => {
    //console.log(req.body.address);
    const student = new Student({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        gender:req.body.gender,
        address: req.body.address
    });
    try{
        const emailFind = await Student.findOne({email: req.body.email});
        if(emailFind){
            res.send({
                msg: 'You already a user'
            })
        }else{
            const insertStudent = await student.save();
            res.status(200).json({
                newStudent: insertStudent
            })
        }
    }catch (error){
        res.status(500).json({
            error: error
        })
    }
});
router.put('/:id', async (req, res, next) => {
    try{
        //const userId = await Student.findById(req.params.id);
        //console.log(userId);
        const insertStudentAddress = await Student.findByIdAndUpdate({_id: req.params.id}, req.body);
        if(insertStudentAddress){
            res.status(200).json({
                id: userId,
                newAddress: insertStudentAddress
            })
        }
    }catch (error){
        res.status(500).json({
            error: error
        })
    }
    
})

//GET or Read
router.get('/', (req, res, next) => {
    Student.find()
    .then(result => {
        res.status(200).json({
            studentData:result
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
});

router.get('/:id', (req, res, next) => {
    Student.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            student:result
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
})

//PUT or Update
// router.put('/:id', (req, res, next) => {
//     Student.findByIdAndUpdate({_id:req.params.id}, req.body)
//     .then(result => {
//         res.status(200).json({
//             message:'success'
//         })
//     })
//     .catch(err => {
//         res.status(500).json({
//             error:err
//         })
//     })
// })

//DELETE or Delete
router.delete('/:id', (req, res, next) => {
    Student.findByIdAndDelete({_id:req.params.id})
    .then(result => {
        res.status(200).json({
            message:'success'
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;