
/**
 * @apiDefine baseid
 * @apiParam {String} baseid Base Asset ID.
 */

/**
 * @apiDefine orderid
 * @apiParam {String} orderid Order ID.
 */

/**
 * @apiDefine relid
 * @apiParam {String} relid Rel Asset ID.
 */

/**
 * @apiDefine exchange
 * @apiParam {String="nxtae","InstantDEX","bitfinex","btc38","bitstamp","btce","poloniex","bittrex","huobi","coinbase","okcoin","bityes","lakebtc","exmo","quadriga"} exchange="null" (optional) If specified, only return data or use data from selected exchange. 
 */

/**
 * @apiDefine ext_exchange
 * @apiParam {String="bitfinex","btc38","bitstamp","btce","poloniex","bittrex","huobi","coinbase","okcoin","bityes","lakebtc","exmo","quadriga"} exchange Supported external exchanges
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
 * @api {btcd} '{"plugin":"InstantDEX","method":"allorderbooks"}' Allorderbooks
 * @apiVersion 0.1.0
 * @apiName getInstantDEXmethodAllorderbooks
 * @apiGroup InstantDEX
 *
 * @apiParam {String} allorderbooks Get list of all active orderbooks.
 *
 *
 * @apiParamExample {btcd} RPC-Call-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"allorderbooks"}'
 *
 * @apiSuccessExample {json} Response-Example:
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
 * @api {btcd} '{"plugin":"InstantDEX","method":"balance","exchange":"{exchange}"}' Balance
 * @apiVersion 0.1.0
 * @apiName GetInstantDEXMethodBalance
 * @apiGroup InstantDEX
 * @apiUse ext_exchange
 *
 * @apiParam {String} openorders Get list of active orders.
 *
 *
 * @apiParamExample {btcd} RPC-Call-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"balance","exchange":"btc38"}'
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"balance","exchange":"poloniex"}'
 *
 * @apiSuccessExample {json} Response-Example:
 * to be added
 */

/**
 * @api {btcd} '{"plugin":"InstantDEX","method":"cancelorder","orderid":"{orderid}"}' Cancelorder
 * @apiVersion 0.1.0
 * @apiName getInstantDEXmethodCancelOrder
 * @apiGroup InstantDEX
 * @apiUse orderid
 *
 * @apiParam {String} cancelorder Cancel active order. orderid can be found in the response field from orderbook or openorders call.
 *
 *
 * @apiParamExample {btcd} RPC-Call-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"cancelorder","orderid":"{1687151384261107915}'
 *
 * @apiSuccessExample {json} Response-Example:
 *{
 * "ordercanceled": "1687151384261107915"
 *}
 */

/** 
 * @api {btcd} '{"plugin":"InstantDEX","method":"openorders","exchange":"{exchange}"}' Openorders
 * @apiVersion 0.1.0
 * @apiName GetInstantDEXMethodOpenOrders
 * @apiGroup InstantDEX
 * @apiUse exchange 
 *
 * @apiParam {String} openorders Get list of active orders.
 *
 *
 * @apiParamExample {btcd} RPC-Call-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"openorders"}'
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"openorders","exchange":"nxtae"}'
 *
 * @apiSuccessExample {json} Response-Example:
 *{
 * "openorders": [
 *   {
 *     "quoteid": "15812219587932742311",
 *     "base": "Jay",
 *     "baseid": "8688289798928624137",
 *     "baseamount": "100000000",
 *     "rel": "NXT",
 *     "relid": "5527630",
 *     "relamount": "100000000",
 *     "price": 1,
 *     "volume": 1,
 *     "offerNXT": "6746683124695165774",
 *     "timestamp": "1440498301",
 *     "isask": "0",
 *     "exchange": "InstantDEX",
 *     "gui": ""
 *   }
 * ]
 *}
 *
 *
 */

/** 
 * @api {btcd} '{"plugin":"InstantDEX","method":"openorders","baseid":"{baseid}","relid":"{relid}","exchange":"{exchange}"}' Orderbook
 * @apiVersion 0.1.0
 * @apiName GetInstantDEXMethodOrderbook
 * @apiGroup InstantDEX
 * @apiUse baseid
 * @apiUse relid
 * @apiUse exchange
 * 
 * @apiParam {String} orderbook Get orderbook for pairs.
 * 
 * @apiParamExample {btcd} RPC-Call-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"orderbook","baseid":"8688289798928624137","relid":"5527630"}'
 * #Open Jay/NXT orderbook from all exchanges combined.
 *
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"orderbook","baseid":"8688289798928624137","relid":"5527630","exchange":"InstantDEX"}'
 * #Open Jay/NXT orderbook only from InstantDEX exchange.
 * 
 * @apiSuccessExample {json} Response-Example:
 *{
 * "inverted": 0,
 * "contract": "Jay/NXT",
 * "baseid": "8688289798928624137",
 * "relid": "5527630",
 * "bids": [
 *   {
 *     "plugin": "InstantDEX",
 *     "method": "tradesequence",
 *     "dotrade": 1,
 *     "price": 12.321,
 *     "volume": 100
 *   },
 *   {
 *     "plugin": "InstantDEX",
 *     "method": "tradesequence",
 *     "dotrade": 1,
 *     "price": 12.32,
 *     "volume": 99
 *   },
 *   {
 *     "plugin": "InstantDEX",
 *     "method": "tradesequence",
 *     "dotrade": 1,
 *     "price": 12.31,
 *     "volume": 200
 *   }
 * ],
 * "asks": [
 *   {
 *     "plugin": "InstantDEX",
 *     "method": "tradesequence",
 *     "dotrade": 1,
 *     "price": 15.749,
 *     "volume": 17
 *   },
 *   {
 *     "plugin": "InstantDEX",
 *     "method": "tradesequence",
 *     "dotrade": 1,
 *     "price": 15.75,
 *     "volume": 225.0492
 *   },
 *   {
 *     "plugin": "InstantDEX",
 *     "method": "tradesequence",
 *     "dotrade": 1,
 *     "price": 15.79,
 *     "volume": 149.948
 *   }
 * ],
 * "numbids": 8,
 * "numasks": 25,
 * "lastbid": 12.321,
 * "lastask": 15.749,
 * "NXT": "6746683124695165774",
 * "timestamp": 1440517635,
 * "maxdepth": 25
 *}
 *
 */

/**
 * @api {btcd} '{"plugin":"InstantDEX","method":"placeask","baseid":"{baseid}","relid":"{relid}","price":"{price}","volume":"{volume}","exchange":"{exchange}"}' Placeask
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
 * @apiParamExample {btcd} RPC-Call-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"placeask","baseid":"8688289798928624137","relid":"5527630","price":1,"volume":1,"exchange":"InstantDEX"}'
 * #Submit ask order : 1 Jay assets @ 1 Nxt into InstantDEX.
 *
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"placeask","baseid":"8688289798928624137","relid":"5527630","price":1,"volume":1}'
 * #Submit ask order : 1 Jay assets @ 1 Nxt. Automatch will be used if no exchange specified.
 *
 * @apiSuccessExample {json} Response-Example:
 *{
 * "quoteid": "17093329214979608856",
 * "base": "Jay",
 * "baseid": "8688289798928624137",
 * "baseamount": "100000000",
 * "rel": "NXT",
 * "relid": "5527630",
 * "relamount": "100000000",
 * "price": 1,
 * "volume": 1,
 * "offerNXT": "6746683124695165774",
 * "timestamp": "1440518266",
 * "isask": "1",
 * "exchange": "InstantDEX",
 * "gui": "",
 * "plugin": "relay",
 * "destplugin": "InstantDEX",
 * "method": "busdata",
 * "submethod": "ask"
 *}
 */

/**
 * @api {btcd} '{"plugin":"InstantDEX","method":"placebid","baseid":"{baseid}","relid":"{relid}","price":"{price}","volume":"{volume}","exchange":"{exchange}"}' Placebid
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
 * @apiParamExample {btcd} RPC-Call-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"placebid","baseid":"8688289798928624137","relid":"5527630","price":1,"volume":1,"exchange":"InstantDEX"}'
 * #Submit bid order : 1 Jay assets @ 1 Nxt into InstantDEX.
 *
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"placebid","baseid":"8688289798928624137","relid":"5527630","price":1,"volume":1}'
 * #Submit bid order : 1 Jay assets @ 1 Nxt. Automatch will be used if no exchange specified.
 *
 * @apiSuccessExample {json} Response-Example:
 *{
 * "quoteid": "14436741218861091498",
 * "base": "Jay",
 * "baseid": "8688289798928624137",
 * "baseamount": "100000000",
 * "rel": "NXT",
 * "relid": "5527630",
 * "relamount": "100000000",
 * "price": 1,
 * "volume": 1,
 * "offerNXT": "6746683124695165774",
 * "timestamp": "1440518600",
 * "isask": "0",
 * "exchange": "InstantDEX",
 * "gui": "",
 * "plugin": "relay",
 * "destplugin": "InstantDEX",
 * "method": "busdata",
 * "submethod": "bid"
 *}
 *
 *
 */
 
