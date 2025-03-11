import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    // Logic for user signup
});

// Login route
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(500).json({ error: err });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });
        
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
        return res.json({ token });
    })(req, res, next);
});

export default router;
