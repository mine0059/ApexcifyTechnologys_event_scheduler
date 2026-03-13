import { Router } from "express";
import { body } from "express-validator";
import { getEvents, createEvent } from "../controllers/events.controller.js";

import validationError from "../middlewares/validationError.js";

const eventRouter = Router();

eventRouter.get('/', getEvents);
eventRouter.post(
    '/', 
    body('title').notEmpty().withMessage('Title is required').isLength({ max: 100 }).withMessage('Title must be at most 100 characters long'),
    body('description').notEmpty().withMessage('Description is required'),
    body('date')
    .notEmpty().withMessage('Date is required')
    .isISO8601().withMessage('Date must be in ISO 8601 format (YYYY-MM-DD)')
    .custom((value) => {
      const eventDate = new Date(value);
      const today = new Date();

      today.setHours(0,0,0,0);

      if (eventDate < today) {
        throw new Error('Event date cannot be in the past');
      }

      return true;
    }),
    validationError,
    createEvent
);

export default eventRouter;