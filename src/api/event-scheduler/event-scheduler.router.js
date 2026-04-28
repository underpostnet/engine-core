import { moderatorGuard } from '../../server/auth.js';
import { loggerFactory } from '../../server/logger.js';
import { EventSchedulerController } from './event-scheduler.controller.js';
import express from 'express';

const logger = loggerFactory(import.meta);

class EventSchedulerRouter {
  /**
   * Builds and returns the Express Router for this API.
   * @param {import('../../server/auth.js').RouterOptions} options
   * @returns {import('express').Router}
   * @memberof EventSchedulerRouter
   */
  static router(options) {
  const router = express.Router();
  const { authMiddleware } = options;
  router.post(
    `/:id`,
    authMiddleware,
    moderatorGuard,
    async (req, res) => await EventSchedulerController.post(req, res, options),
  );
  router.post(
    `/`,
    authMiddleware,
    moderatorGuard,
    async (req, res) => await EventSchedulerController.post(req, res, options),
  );
  router.get(`/creatorUser`, authMiddleware, async (req, res) => await EventSchedulerController.get(req, res, options));
  router.get(
    `/creatorUser/:id`,
    authMiddleware,
    async (req, res) => await EventSchedulerController.get(req, res, options),
  );
  router.get(`/:id`, async (req, res) => await EventSchedulerController.get(req, res, options));
  router.get(`/`, async (req, res) => await EventSchedulerController.get(req, res, options));
  router.put(
    `/:id`,
    authMiddleware,
    moderatorGuard,
    async (req, res) => await EventSchedulerController.put(req, res, options),
  );
  router.put(
    `/`,
    authMiddleware,
    moderatorGuard,
    async (req, res) => await EventSchedulerController.put(req, res, options),
  );
  router.delete(
    `/:id`,
    authMiddleware,
    moderatorGuard,
    async (req, res) => await EventSchedulerController.delete(req, res, options),
  );
  router.delete(
    `/`,
    authMiddleware,
    moderatorGuard,
    async (req, res) => await EventSchedulerController.delete(req, res, options),
  );
  return router;
  }
}

const ApiRouter = (options) => EventSchedulerRouter.router(options);

export { ApiRouter, EventSchedulerRouter };
