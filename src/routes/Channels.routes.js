import channelController from '../controllers/Channels.controller.js'
import * as channelValidators from '../validators/Channels.validators.js'

export default [

  /**
  * @api {post} /bots/:bot_id/channels Create a Channel
  * @apiName createChannelByBotId
  * @apiGroup Channel
  *
  * @apiDescription Create a channel only with parameters provided.
  *
  * @apiParam {String} slug Channel slug
  * @apiParam {String} type Channel type
  * @apiParam {String} token (Optionnal) Channel token (Messenger and Slack)
  * @apiParam {String} userName (Optionnal) Channel username (Kik)
  * @apiParam {String} apiKey (Optionnal) Channel apiKey (Kik and Messenger)
  * @apiParam {String} webhook (Optionnal) Channel webhook (Kik and Messenger)
  * @apiParam {Boolean} isActivated Channel isActivated
  *
  * @apiSuccess {Object} results Channel information
  * @apiSuccess {String} results.slug Channel slug
  * @apiSuccess {String} results.type Channel type
  * @apiSuccess {String} results.token Channel token
  * @apiSuccess {String} results.userName Channel userName
  * @apiSuccess {String} results.apiKey Channel apiKey
  * @apiSuccess {String} results.webhook Channel webhook
  * @apiSuccess {Boolean} results.isActivated Channel isActivated
  * @apiSuccess {String} message success message
  *
  * @apiError (Bad Request 400 bot_id not valid) {String} message Return if bot_id is invalid
  *
  * @apiError (Bad Request 400 type not valid) {String} message Return if type is invalid
  *
  * @apiError (Bad Request 400 isActivated not valid) {String} message Return if isActivated is invalid
  *
  * @apiError (Bad Request 400 slug not valid) {String} message Return if slug is invalid
  *
  * @apiError (Conflict 409 slug already taken) {String} message Return if slug is already taken in the current Bot scope
  */
  {
    method: 'POST',
    path: '/bots/:bot_id/channels',
    validators: [channelValidators.createChannelByBotId],
    handler: channelController.createChannelByBotId,
  },

  /**
  * @api {get} /bots/:bot_id/channels Get Channels
  * @apiName getChannelsByBotId
  * @apiGroup Channel
  *
  * @apiDescription Get all Channels of a Bot
  *
  * @apiParam {String} bot_id Bot id
  *
  * @apiSuccess {Array} results Array of Channels
  * @apiSuccess {String} results.bot Bot object
  * @apiSuccess {String} results.slug Channel slug
  * @apiSuccess {String} results.type Channel type
  * @apiSuccess {String} results.token Channel token
  * @apiSuccess {String} results.userName Channel userName
  * @apiSuccess {String} results.apiKey Channel apiKey
  * @apiSuccess {String} results.webhook Channel webhook
  * @apiSuccess {Boolean} results.isActivated Channel isActivated
  * @apiSuccess {String} message success message
  *
  * @apiError (Bad Request 400 bot_id not valid) {String} message Return if bot_id is invalid
  *
  * @apiError (Not found 404) {String} message Return if the Bot doesn't exist
  */
  {
    method: 'GET',
    path: '/bots/:bot_id/channels',
    validators: [channelValidators.getChannelsByBotId],
    handler: channelController.getChannelsByBotId,
  },

  /**
  * @api {get} /bots/:bot_id/channels/:channel_slug Get a Channel
  * @apiName getChannelByBotId
  * @apiGroup Channel
  *
  * @apiDescription Get a Channel of a Bot
  *
  * @apiParam {String} channel_slug Channel slug.
  *
  * @apiSuccess {Object} results Channel information
  * @apiSuccess {String} results.channel_slug Channel slug.
  * @apiSuccess {String} results.bot Bot object.
  * @apiSuccess {String} results.slug Channel slug.
  * @apiSuccess {String} results.type Channel type.
  * @apiSuccess {String} results.token Channel token.
  * @apiSuccess {String} results.userName Channel userName.
  * @apiSuccess {String} results.apiKey Channel apiKey.
  * @apiSuccess {String} results.webhook Channel webhook.
  * @apiSuccess {Boolean} results.isActivated Channel isActivated.
  * @apiSuccess {String} message success message
  *
  * @apiError (Bad Request 400 bot_id not valid) {String} message Return if bot_id is invalid
  *
  * @apiError (Bad Request 400 channel_slug not valid) {String} message Return if channel_slug is invalid
  *
  * @apiError (Not found 404) {String} message Return if either the Bot or the Channel doesn't exist
  */
  {
    method: 'GET',
    path: '/bots/:bot_id/channels/:channel_slug',
    validators: [channelValidators.getChannelByBotId],
    handler: channelController.getChannelByBotId,
  },

  /**
  * @api {put} /bots/:bot_id/channels/:channel_slug Update a Channel
  * @apiName updateChannelByBotId
  * @apiGroup Channel
  *
  * @apiDescription Update a Channel
  *
  * @apiParam {String} channel_slug Channel slug.
  * @apiParam {String} slug Channel slug
  * @apiParam {String} type Channel type
  * @apiParam {String} token (Optionnal) Channel token (Messenger and Slack)
  * @apiParam {String} userName (Optionnal) Channel username (Kik)
  * @apiParam {String} apiKey (Optionnal) Channel apiKey (Kik and Messenger)
  * @apiParam {String} webhook (Optionnal) Channel webhook (Kik and Messenger)
  * @apiParam {Boolean} isActivated Channel isActivated
  *
  * @apiSuccess {Object} results Channel information
  * @apiSuccess {String} results.channel_slug Channel slug.
  * @apiSuccess {String} results.bot Bot object.
  * @apiSuccess {String} results.slug Channel slug.
  * @apiSuccess {String} results.type Channel type.
  * @apiSuccess {String} results.token Channel token.
  * @apiSuccess {String} results.userName Channel userName.
  * @apiSuccess {String} results.apiKey Channel apiKey.
  * @apiSuccess {String} results.webhook Channel webhook.
  * @apiSuccess {Boolean} results.isActivated Channel isActivated.
  * @apiSuccess {String} message success message
  *
  * @apiError (Bad Request 400 bot_id not valid) {String} message Return if bot_id is invalid
  *
  * @apiError (Bad Request 400 channel_slug not valid) {String} message Return if channel_slug is invalid
  *
  * @apiError (Not found 404) {String} message Return if either the Bot or the Channel doesn't exist
  *
  * @apiError (Conflict 409 slug already taken) {String} message Return if slug is already taken
  */
  {
    method: 'PUT',
    path: '/bots/:bot_id/channels/:channel_slug',
    validators: [channelValidators.updateChannelByBotId],
    handler: channelController.updateChannelByBotId,
  },

  /**
  * @api {delete} /bots/:bot_id/channels/:channel_slug Delete a Channel
  * @apiName deleteChannelByBotId
  * @apiGroup Channel
  *
  * @apiDescription Delete a Channel
  *
  * @apiParam {String} channel_slug Channel slug.
  *
  * @apiError (Not found 404) {String} message Return if either the Bot or the Channel doesn't exist
  */
  {
    method: 'DELETE',
    path: '/bots/:bot_id/channels/:channel_slug',
    validators: [channelValidators.deleteChannelByBotId],
    handler: channelController.deleteChannelByBotId,
  },
]
