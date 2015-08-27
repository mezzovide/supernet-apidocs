
/**
 * @apiDefine baseid
 * @apiParam {String} baseid Base asset ID.
 */

/**
 * @apiDefine base
 * @apiParam {String} base Base asset name.
 */

/**
 * @apiDefine rel
 * @apiParam {String} rel Rel asset name.
 */

/**
 * @apiDefine name
 * @apiParam {String} name Pair's name.
 */

/**
 * @apiDefine orderid
 * @apiParam {String} orderid Order ID.
 */

/**
 * @apiDefine relid
 * @apiParam {String} relid Rel asset ID.
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
 * @apiDefine dotrade
 * @apiParam {Boolean} dotrade Switch between real trading or dry-run.
 */

/**
 * @apiDefine group
 * @apiParam {Number} group Number of basket group.
 */

/**
 * @apiDefine asset  
 * @apiParam {String} asset Numerical asset ID.
 */

/**
 * @apiDefine offernxt
 * @apiParam {String} offerNXT Numerical NXT sender ID.
 */

/**
 * @apiDefine trade
 * @apiParam {String="swap","buy","sell"} trade Trade methods.
 */

/**
 * @apiDefine recvbase
 * @apiParam {String} recvbase The amount of base/baseid to be received.
 */

/**
 * @apiDefine recvrel
 * @apiParam {String} recvrel The amount of rel/relid to be received.
 */

/**
 * @apiDefine sendbase
 * @apiParam {String} sendbase The amount of base/baseid to be sent. 
 */

/**
 * @apiDefine sendrel
 * @apiParam {String} sendrel The amount of rel/relid to be sent.
 */

/**
 * @apiDefine orderprice
 * @apiParam {Number} orderprice The price to be traded per "trades" sequence.
 */

/**
 * @apiDefine ordervolume 
 * @apiParam {Number} ordervolume The amount of volume to be traded per "trades" sequence.
 */

/**
 * @apiDefine orderid
 * @apiParam {String} orderid orderid.
 */

/**
 * @apiDefine quoteid
 * @apiParam {String} quoteid quoteid.
 */
 
/** 
 * @api {btcd} '{"plugin":"InstantDEX","method":"allorderbooks"}' Allorderbooks
 * @apiVersion 0.1.0
 * @apiName InstantDEXmethodAllOrderBooks
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
 * @apiName InstantDEXMethodBalance
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
 * @apiName InstantDEXmethodCancelOrder
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
 * @api {btcd} '{"plugin":"InstantDEX","method":"makebasket","name":"{name}","base":"{base}","rel":"{rel}","basket":[{"exchange":"{exchange}"}' Makebasket
 * @apiVersion 0.1.0
 * @apiName InstantDEXMethodMakeBasket
 * @apiGroup InstantDEX
 * @apiUse name
 * @apiUse base
 * @apiUse rel
 * @apiUse exchange
 * 
 * 
 * @apiParam {String} makebasket Make basket pair, can be done in SuperNET.conf too.
 *
 * 
 * @apiParamExample {btcd} RPC-Call-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"makebasket","name":"NXT/BTC","base":"NXT","rel":"BTC","basket":[{"exchange":"btc38"},{"exchange":"nxtae","baseid":"17554243582654188572","relid":"NXT","wt":-1}]}'
 * 
 * @apiSuccessExample {json} Response-Example:
 * {"result":"basket made"}
 *
 */

/** 
 * @api {btcd} '{"plugin":"InstantDEX","method":"openorders","exchange":"{exchange}"}' Openorders
 * @apiVersion 0.1.0
 * @apiName InstantDEXMethodOpenOrders
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
 * @apiName InstantDEXMethodOrderBook
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
 * @apiName InstantDEXMethodPlaceAsk
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
 * @apiName InstantDEXMethodPlaceBid
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
 */

/**
 * @api {btcd} '{"plugin":"InstantDEX","method":"tradesequence","dotrade":{dotrade},"price":{price},"volume":{volume},"trades":[{"group":{group},"exchange":"{exchange}","asset":"{asset}","offerNXT":"{offernxt}","baseid":"{baseid}","relid":"{relid}","trade":"{trade}","recvbase":"{recvbase}","sendrel":"{sendrel}","orderprice":{orderprice},"ordervolume":{ordervolume},"orderid":"{orderid}","quoteid":"{quoteid}"}]}' Tradesequence
 * @apiVersion 0.1.0
 * @apiName InstantDEXMethodTradeSequence
 * @apiGroup InstantDEX
 * @apiUse dotrade
 * @apiUse price
 * @apiUse volume
 * @apiUse group
 * @apiUse exchange
 * @apiUse asset
 * @apiUse offernxt
 * @apiUse baseid
 * @apiUse relid
 * @apiUse trade
 * @apiUse recvbase
 * @apiUse sendrel
 * @apiUse orderprice
 * @apiUse ordervolume
 * @apiUse orderid
 * @apiUse quoteid
 *
 * @apiParam {String} tradesequence Step-by-step InstantDEX trading process logic.
 *
 * @apiParamExample {btcd} RPC-Call-Example:
 * ./BitcoinDarkd SuperNET '{"plugin":"InstantDEX","method":"tradesequence","dotrade":1,"price":1,"volume":1,"trades":[{"group":0,"exchange":"InstantDEX","asset":"8688289798928624137","offerNXT":"11471677413693100042","baseid":"8688289798928624137","relid":"5527630","trade":"swap","recvbase":"10000","sendrel":"100000000","orderprice":1,"ordervolume":1,"orderid":"17781610373390691008","quoteid":"17781610373390691008"}]}'
 * 
 * @apiSuccessExample {json} Response-Example:
 *{
 * "traderesults": [
 *   {
 *     "orderid": "10627900755374734772",
 *     "quoteid": "17781610373390691008",
 *     "offerNXT": "6746683124695165774",
 *     "plugin": "relay",
 *     "destplugin": "InstantDEX",
 *     "method": "busdata",
 *     "submethod": "swap",
 *     "exchange": "InstantDEX",
 *     "base": "Jay",
 *     "rel": "NXT",
 *     "baseid": "8688289798928624137",
 *     "relid": "5527630",
 *     "baseqty": "10000",
 *     "relqty": "-100000000",
 *     "price": 1,
 *     "volume": 1,
 *     "F": "506086",
 *     "T": "cc95caae0ff5ecd89b3e0a6e28a015ae3e89d35939e49a8da527b5d01aba7a6a",
 *     "FH": "39500ef67070f015e14ec8fd251569bbe90e22e6467e629b6836851672cd35ef",
 *     "U": "0010273e4b037800b2737a50100da1ba43aa87ba3da42de66fd0a84d5d26d77312e882961cf1ea2d0a900c05d495339f00e1f5050000000000e1f50500000000cc95caae0ff5ecd89b3e0a6e28a015ae3e89d35939e49a8da527b5d01aba7a6aZ01000000dab807002b82975378eefa1b01200000806234376433373930366465333764393363303661356137303663663863346636",
 *     "S": "f516e76ec24569548c4e55fb60f6991265b3ba14e9ef3aa90a25fba8d42c396b",
 *     "a": "8688289798928624137",
 *     "q": "10000"
 *   }
 * ]
 *}
 */
 
