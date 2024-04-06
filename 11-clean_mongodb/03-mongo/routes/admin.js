const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course}=require("../db")

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username =req.body.username;
    const password=req.body.password;
    Admin.create({
        username:username,
        password:password
    })
    res.json({
        msg:"admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    const newCourse=await Course.create({
        title,
        description,
        imageLink,
        price
    })
        res.json({
            msg:"course created successfully",
            courseid:newCourse._id
        })
    

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourse=await Course.find();
    res.json({
        course:allCourse
    })
    
});

module.exports = router;