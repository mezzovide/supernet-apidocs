define({ "api": [
  {
    "type": "get",
    "url": "/InstantDEX?method=openorders&exchange={exchange}",
    "title": "Openorders",
    "version": "0.1.0",
    "name": "GetInstantDEXMethodOpenOrders",
    "group": "InstantDEX",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "openorders",
            "description": "<p>Get list of active orders.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"nxtae\"",
              "\"InstantDEX\""
            ],
            "optional": false,
            "field": "exchange",
            "defaultValue": "null",
            "description": "<p>(optional) If specified, only return data or use data from selected exchange.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "cURL-Example:",
          "content": "curl --url \"http://127.0.0.1:7777/InstantDEX?method=openorders\" \ncurl --url \"http://127.0.0.1:7777/InstantDEX?method=openorders&exchange=nxtae\"",
          "type": "curl"
        },
        {
          "title": "BitcoinDark-Example:",
          "content": "./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"openorders\"}'\n./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"openorders\",\"exchange\":\"nxtae\"}'",
          "type": "btcd"
        }
      ]
    },
    "filename": "./supernet.js",
    "groupTitle": "InstantDEX"
  },
  {
    "type": "get",
    "url": "/InstantDEX?method=orderbook&baseid={baseid}&relid={relid}&exchange={exchange}",
    "title": "Orderbook",
    "version": "0.1.0",
    "name": "GetInstantDEXMethodOrderbook",
    "group": "InstantDEX",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "orderbook",
            "description": "<p>Get orderbook for pairs.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "baseid",
            "description": "<p>Base Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "relid",
            "description": "<p>Rel Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"nxtae\"",
              "\"InstantDEX\""
            ],
            "optional": false,
            "field": "exchange",
            "defaultValue": "null",
            "description": "<p>(optional) If specified, only return data or use data from selected exchange.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "cURL-Example:",
          "content": "curl --url \"http://127.0.0.1:7777/InstantDEX?method=orderbook&baseid=8688289798928624137&relid=5527630\"\n#Open Jay/NXT orderbook from all exchanges combined.\n\ncurl --url \"http://127.0.0.1:7777/InstantDEX?method=orderbook&baseid=8688289798928624137&relid=5527630&exchange=InstantDEX\"\n#Open Jay/NXT orderbook only from InstantDEX exchange.",
          "type": "curl"
        },
        {
          "title": "BitcoinDark-Example:",
          "content": "./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"orderbook\",\"baseid\":\"8688289798928624137\",\"relid\":\"5527630\"}'\n#Open Jay/NXT orderbook from all exchanges combined.\n\n./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"orderbook\",\"baseid\":\"8688289798928624137\",\"relid\":\"5527630\",\"exchange\":\"InstantDEX\"}'\n#Open Jay/NXT orderbook only from InstantDEX exchange.",
          "type": "btcd"
        }
      ]
    },
    "filename": "./supernet.js",
    "groupTitle": "InstantDEX"
  },
  {
    "type": "get",
    "url": "/InstantDEX?method=placeask&price={price}&volume={volume}&baseid={baseid}&relid={relid}&exchange={exchange}",
    "title": "Placeask",
    "version": "0.1.0",
    "name": "GetInstantDEXMethodPlaceAsk",
    "group": "InstantDEX",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "placeask",
            "description": "<p>Submit ask order.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "price",
            "description": "<p>Bid/Ask Price.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "volume",
            "description": "<p>Bid/Ask Volume.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "baseid",
            "description": "<p>Base Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "relid",
            "description": "<p>Rel Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"nxtae\"",
              "\"InstantDEX\""
            ],
            "optional": false,
            "field": "exchange",
            "defaultValue": "null",
            "description": "<p>(optional) If specified, only return data or use data from selected exchange.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "cURL-Example:",
          "content": "curl --url \"http://127.0.0.1:7777/InstantDEX?method=placeask&price=15.5&volume=5&baseid=8688289798928624137&relid=5527630&exchange=InstantDEX\"\n#Submit ask order : 15 Jay assets @ 15.5 Nxt into InstantDEX.\n\ncurl --url \"http://127.0.0.1:7777/InstantDEX?method=placeask&price=15.5&volume=5&baseid=8688289798928624137&relid=5527630\" \n#Submit ask order : 15 Jay assets @ 15.5 Nxt. Automatch will be used if no exchange specified.",
          "type": "curl"
        }
      ]
    },
    "filename": "./supernet.js",
    "groupTitle": "InstantDEX"
  },
  {
    "type": "get",
    "url": "/InstantDEX?method=placebid&price={price}&volume={volume}&baseid={baseid}&relid={relid}&exchange={exchange}",
    "title": "Placebid",
    "version": "0.1.0",
    "name": "GetInstantDEXMethodPlaceBid",
    "group": "InstantDEX",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "placebid",
            "description": "<p>Submit bid order.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "price",
            "description": "<p>Bid/Ask Price.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "volume",
            "description": "<p>Bid/Ask Volume.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "baseid",
            "description": "<p>Base Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "relid",
            "description": "<p>Rel Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"nxtae\"",
              "\"InstantDEX\""
            ],
            "optional": false,
            "field": "exchange",
            "defaultValue": "null",
            "description": "<p>(optional) If specified, only return data or use data from selected exchange.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "cURL-Example:",
          "content": "curl --url \"http://127.0.0.1:7777/InstantDEX?method=placebid&price=15.5&volume=5&baseid=8688289798928624137&relid=5527630&exchange=InstantDEX\"\n#Submit bid order : 15 Jay assets @ 15.5 Nxt into InstantDEX.\n\ncurl --url \"http://127.0.0.1:7777/InstantDEX?method=placebid&price=15.5&volume=5&baseid=8688289798928624137&relid=5527630\"\n#Submit bid order : 15 Jay assets @ 15.5 Nxt. Automatch will be used if no exchange specified.",
          "type": "curl"
        }
      ]
    },
    "filename": "./supernet.js",
    "groupTitle": "InstantDEX"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "_home_mezzovide_apidocs_docs_main_js",
    "groupTitle": "_home_mezzovide_apidocs_docs_main_js",
    "name": ""
  }
] });