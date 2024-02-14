import express from 'express'
import { createListing, deleteListing, updateLisiting  } from '../controller/listingController.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateLisiting);

export default router;