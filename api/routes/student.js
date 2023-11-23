//initialize express
const express = require('express');
const router = express.Router();
const Student = require('../model/student');

//POST or Create
router.post('/', async (req, res, next) => {
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
    }catch (err){
        res.status(500).json({
            error: err
        })
    }
});

//GET or Read
router.get('/', async (req, res, next) => {
    try{
        const displayStudentsData = await Student.find();
        if(displayStudentsData){
            res.status(200).json({
                studentsData: displayStudentsData
            })
        }else{
            res.send({
                msg: 'Data not Found'
            })
        }
    }catch(err){
        res.status(500).json({
            error: err
        })
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const displayStudentInfo = await Student.findById(req.params.id);
        if(displayStudentInfo){
            res.status(200).json({
                studentData: displayStudentInfo
            })
        }else{
            res.send({
                msg: 'Data not Found'
            })
        }
    }catch(err){
        res.status(500).json({
            error: err
        })
    }
})

//PUT or Update
router.put('/:id', async (req, res, next) => {
    try{
        const updateStudentInfo = await Student.findByIdAndUpdate({_id: req.params.id}, req.body);
        if(updateStudentInfo){
            res.status(200).json({
                msg: 'Successfully Updated'
            })
        }else{
            res.send({
                msg: 'Data not Found'
            })
        }
    }catch(err){
        res.status(500).json({
            error: err
        })
    }
})

//DELETE or Delete
router.delete('/:id', async (req, res, next) => {
    try{
        const deleteStudentInfo = await Student.findByIdAndDelete({_id: req.params.id});
        if(deleteStudentInfo){
            res.status(200).json({
                msg: 'Successfully Deleted'
            })
        }else{
            res.send({
                msg: 'Data not Found'
            })
        }
    }catch(err){
        res.status(500).json({
            error: err
        })
    }
})

module.exports = router;