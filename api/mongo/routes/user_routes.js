const express = require('express');
const router = express.Router();
const User = require('../model/user_model');

//POST
router.post('/post', async (req, res) => {
    const user = new User({
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
        full_name: req.body.full_name,
        address: req.body.address,
        date_of_birth: req.body.date_of_birth,
        contact: req.body.contact
    });
    try{
        const searchEmail = await User.findOne({email: req.body.email});
        if(searchEmail){
            res.send({
                message: 'You have already an Account'
            })
        }else{
            const insertUser = await user.save();
            res.status(200).json({
                message: 'Create New User Successfully'
            })
        }
    }catch(err){
        res.status(500).json({
            error: err
        })
    }
});
//GET All
router.get('/get', async (req, res) => {
    try{
        const displayUsersInfo = await User.find();
        if(displayUsersInfo){
            res.status(200).json({
                users: displayUsersInfo
            })
        }else{
            res.send({
                message: 'Users not Found'
            })
        }
    }catch (err){
        res.status(500).json({
            error: err
        })
    }
});
//GET by ID
router.get('/get/:id', async (req, res) => {
    try{
        const displayUserInfo = await User.findById(req.params.id);
        if(displayUserInfo){
            res.status(200).json({
                user: displayUserInfo
            })
        }else{
            res.send({
                message: 'User not Found'
            })
        }
    }catch (err){
        res.status(500).json({
            error: err
        })
    }
});
//UPDATE
router.put('/update/:id', async (req, res) => {
    try{
        const searchId = await User.findById(req.params.id);
        console.log(searchId);
        if(searchId.email === req.body.email){
            const updateUserInfo = await User.findByIdAndUpdate({_id: req.params.id}, req.body);
            if(updateUserInfo){
                res.status(200).json({
                    message: 'Update User Successfully'
                })
            }else{
                res.send({
                    message: 'User not Found for Update'
                })
            }
        }else{
            res.send({
                message: 'Sorry! You can not change your email.'
            })
        }
        
    }catch (err){
        res.status(500).json({
            error: err
        })
    }
});
//DELETE
router.delete('/delete/:id', async (req, res) => {
    try{
        const deleteUserInfo = await User.findByIdAndDelete(req.params.id);
        if(deleteUserInfo){
            res.status(200).json({
                message: 'Delete User Successfully'
            })
        }else{
            res.send({
                message: 'User not Found for Delete'
            })
        }
    }catch (err){
        res.status(500).json({
            error: err
        })
    }
});

module.exports = router;