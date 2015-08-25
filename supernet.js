/**
 * @apiDefine baseid
 * @apiParam {String} baseid Base Asset ID.
 */

/**
 * @apiDefine relid
 * @apiParam {String} relid Rel Asset ID.
 */

/**
 * @apiDefine exchange
 * @apiParam {String="nxtae","InstantDEX"} exchange="null" (optional) If specified, only return data or use data from selected exchange. 
 */

/**
 * @apiDefine price
 * @apiParam {Number} price Bid/Ask Price.
 */

/**
 * @apiDefine volume   
 * @apiParam {Number} volume Bid/Ask Volume.
 */
 
 /** 
 * @api {BitcoinDarkd SuperNET} '{"plugin":"InstantDEX","method":"allorderbooks"}' Allorderbooks
 * @apiVersion 0.1.0
 * @apiName getInstantDEXmethodAllorderbooks
 * @apiGroup InstantDEX
 *
 * @apiParam {String} allorderbooks Get list of all active orderbooks.
 *
 *
 * @apiParamExample {btcd} Call-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"allorderbooks"}'
 *
 * @apiSuccessExample {json} Success-Response-Example:
 *{
 * "orderbooks": [
 *   {
 *     "name": "Jay/NXT",
 *     "base": "Jay",
 *     "baseid": "8688289798928624137",
 *     "rel": "NXT",
 *     "relid": "5527630",
 *     "exchange": "InstantDEX"
 *   },
 *   {
 *     "name": "SuperNET/NXT",
 *     "base": "SuperNET",
 *     "baseid": "12071612744977229797",
 *     "rel": "NXT",
 *     "relid": "5527630",
 *     "exchange": "InstantDEX"
 *   }
 * ]
 *}
 */



/** 
 * @api {get} /InstantDEX?method=openorders&exchange={exchange} Openorders
 * @apiVersion 0.1.0
 * @apiName GetInstantDEXMethodOpenOrders
 * @apiGroup InstantDEX
 * @apiUse exchange 
 *
 * @apiParam {String} openorders Get list of active orders.
 *
 * @apiParamExample {curl} cURL-Example:
 * curl --url "http://127.0.0.1:7777/InstantDEX?method=openorders" 
 * curl --url "http://127.0.0.1:7777/InstantDEX?method=openorders&exchange=nxtae"	
 *
 * @apiParamExample {btcd} BitcoinDark-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"openorders"}'
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"openorders","exchange":"nxtae"}'
 */

/** 
 * @api {get} /InstantDEX?method=orderbook&baseid={baseid}&relid={relid}&exchange={exchange} Orderbook
 * @apiVersion 0.1.0
 * @apiName GetInstantDEXMethodOrderbook
 * @apiGroup InstantDEX
 * @apiUse baseid
 * @apiUse relid
 * @apiUse exchange
 * 
 * @apiParam {String} orderbook Get orderbook for pairs.
 * 
 * @apiParamExample {curl} cURL-Example:
 * curl --url "http://127.0.0.1:7777/InstantDEX?method=orderbook&baseid=8688289798928624137&relid=5527630"
 * #Open Jay/NXT orderbook from all exchanges combined.
 *
 * curl --url "http://127.0.0.1:7777/InstantDEX?method=orderbook&baseid=8688289798928624137&relid=5527630&exchange=InstantDEX"
 * #Open Jay/NXT orderbook only from InstantDEX exchange.
 *
 * 
 * @apiParamExample {btcd} BitcoinDark-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"orderbook","baseid":"8688289798928624137","relid":"5527630"}'
 * #Open Jay/NXT orderbook from all exchanges combined.
 *
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"orderbook","baseid":"8688289798928624137","relid":"5527630","exchange":"InstantDEX"}'
 * #Open Jay/NXT orderbook only from InstantDEX exchange.
 */

/**
 * @api {get} /InstantDEX?method=placeask&price={price}&volume={volume}&baseid={baseid}&relid={relid}&exchange={exchange} Placeask
 * @apiVersion 0.1.0
 * @apiName GetInstantDEXMethodPlaceAsk
 * @apiGroup InstantDEX
 * @apiUse price
 * @apiUse volume
 * @apiUse baseid
 * @apiUse relid
 * @apiUse exchange
 *
 * @apiParam {String} placeask Submit ask order.
 * 
 * @apiParamExample {curl} cURL-Example:
 * curl --url "http://127.0.0.1:7777/InstantDEX?method=placeask&price=15.5&volume=5&baseid=8688289798928624137&relid=5527630&exchange=InstantDEX"
 * #Submit ask order : 15 Jay assets @ 15.5 Nxt into InstantDEX.
 *
 * curl --url "http://127.0.0.1:7777/InstantDEX?method=placeask&price=15.5&volume=5&baseid=8688289798928624137&relid=5527630" 
 * #Submit ask order : 15 Jay assets @ 15.5 Nxt. Automatch will be used if no exchange specified.
 */

/**
 * @api {get} /InstantDEX?method=placebid&price={price}&volume={volume}&baseid={baseid}&relid={relid}&exchange={exchange} Placebid
 * @apiVersion 0.1.0
 * @apiName GetInstantDEXMethodPlaceBid
 * @apiGroup InstantDEX
 * @apiUse price
 * @apiUse volume
 * @apiUse baseid
 * @apiUse relid
 * @apiUse exchange
 *
 * @apiParam {String} placebid Submit bid order.
 *
 * @apiParamExample {curl} cURL-Example:
 * curl --url "http://127.0.0.1:7777/InstantDEX?method=placebid&price=15.5&volume=5&baseid=8688289798928624137&relid=5527630&exchange=InstantDEX"
 * #Submit bid order : 15 Jay assets @ 15.5 Nxt into InstantDEX.
 *
 * curl --url "http://127.0.0.1:7777/InstantDEX?method=placebid&price=15.5&volume=5&baseid=8688289798928624137&relid=5527630"
 * #Submit bid order : 15 Jay assets @ 15.5 Nxt. Automatch will be used if no exchange specified.
 */

