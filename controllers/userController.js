const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
    try{
       const { name, email, role } = req.body;
       if(!name || !email || !role){
        return res.status(400).json({ message: 'Name, email, and role are required' });
       }
         const newUser = await User.create({ name, email, role });
         res.status(201).json({ message: 'User created successfully', user: newUser });
    }catch(error){
        res.status(500).json({ message: 'Server Error Not Create User', error: error.message });
    }
}

// Get all users data
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: 'Get All users successfully', users });
    } catch (error) {
        res.status(500).json({ message: 'Server Error Not Get Users', error: error.message });
    }
}

// Get Single User data
exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'get single user data successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Not Get User', error: error.message });
    }
}

// Update User data
exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const { name, email, role } = req.body;

        const user = await User.findByIdAndUpdate(userId, { name, email, role }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Not Update User', error: error.message });
    }
}


// Delete User data 
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User is not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Not Delete User', error: error.message });
    }
}