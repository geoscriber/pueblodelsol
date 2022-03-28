var APP_DATA = {
  "scenes": [
    {
      "id": "0-pueblo-del-sol",
      "name": "Pueblo Del Sol",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2272985125910676,
        "pitch": 0.5133450448036108,
        "fov": 1.2820191017947098
      },
      "linkHotspots": [
        {
          "yaw": -0.24815903469627365,
          "pitch": 0.6231972088803044,
          "rotation": 0,
          "target": "1-ground-view"
        },
        {
          "yaw": -0.17353084690112652,
          "pitch": 1.033246238111312,
          "rotation": 0,
          "target": "3-corner-view"
        },
        {
          "yaw": -0.11319909931862426,
          "pitch": 0.768588285022469,
          "rotation": 0,
          "target": "2-property-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2643068324346345,
          "pitch": 0.2833925843910521,
          "title": "Enrile Street",
          "text": "Text"
        },
        {
          "yaw": 0.7375208285066481,
          "pitch": 0.4918859859398381,
          "title": "Gate to Pueblo del Sol",
          "text": "Text"
        },
        {
          "yaw": -0.045336867194400554,
          "pitch": 0.8908993562033025,
          "title": "Subject Property",
          "text": "Block 2 Lot 1"
        },
        {
          "yaw": 0.7500364002693942,
          "pitch": 0.8428734603719086,
          "title": "Aerial Video",
          "text":  "<a href='https://youtu.be/Hsm40weIjgs'>Click here to see the aerial video</a>"
        }
      ]
    },
    {
      "id": "1-ground-view",
      "name": "Ground View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6664115068511016,
          "pitch": -0.6526487838858372,
          "rotation": 0,
          "target": "0-pueblo-del-sol"
        },
        {
          "yaw": 0.12549344065505252,
          "pitch": 0.23458734227455302,
          "rotation": 0,
          "target": "4-property-view-with-markers"
        },
        {
          "yaw": 0.8083494748931699,
          "pitch": -0.15926063958483994,
          "rotation": 0,
          "target": "3-corner-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7481809564004855,
          "pitch": 0.35189210301927076,
          "title": "Lot 4",
          "text": ""
        },
        {
          "yaw": -0.8535469936853097,
          "pitch": 0.5716718090377455,
          "title": "Lot 3",
          "text": "Text"
        },
        {
          "yaw": -0.05996666485009072,
          "pitch": 0.43752697926272077,
          "title": "Lot 2",
          "text": "Text"
        },
        {
          "yaw": 0.3355610639670914,
          "pitch": 0.24125031303754696,
          "title": "Lot 1",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-property-view",
      "name": "Property View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.9666969809273613,
        "pitch": 0.6347103470213256,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 1.2274791993233993,
          "pitch": 1.1919117259073566,
          "rotation": 0,
          "target": "4-property-view-with-markers"
        },
        {
          "yaw": 0.7505587867697621,
          "pitch": -0.6956900153569165,
          "rotation": 0,
          "target": "0-pueblo-del-sol"
        },
        {
          "yaw": 1.623074353159227,
          "pitch": 0.004090160061570813,
          "rotation": 0,
          "target": "3-corner-view"
        },
        {
          "yaw": 0.8756682867565377,
          "pitch": 0.6135356941956474,
          "rotation": 0,
          "target": "5-top-view-with-markers"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corner-view",
      "name": "Corner View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.305737414175443,
        "pitch": 0.8637563052360768,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.10231880375432567,
          "pitch": 0.6593992959666934,
          "rotation": 0,
          "target": "4-property-view-with-markers"
        },
        {
          "yaw": -0.4630821063756958,
          "pitch": 0.41066903842771296,
          "rotation": 0,
          "target": "1-ground-view"
        },
        {
          "yaw": 2.0294011503690044,
          "pitch": -0.6963831149474675,
          "rotation": 0,
          "target": "0-pueblo-del-sol"
        },
        {
          "yaw": 0.7220719105252584,
          "pitch": 1.1033699678081739,
          "rotation": 0,
          "target": "5-top-view-with-markers"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-property-view-with-markers",
      "name": "Property View (with Markers)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.217532714568053,
        "pitch": 0.6814870209134103,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.04669869522551906,
          "pitch": 0.836193091812893,
          "rotation": 0,
          "target": "5-top-view-with-markers"
        },
        {
          "yaw": 0.5324540422974309,
          "pitch": -0.4790781691489485,
          "rotation": 0,
          "target": "0-pueblo-del-sol"
        },
        {
          "yaw": 2.8035172337344543,
          "pitch": 1.055590973793148,
          "rotation": 0,
          "target": "1-ground-view"
        },
        {
          "yaw": 0.41185797761461984,
          "pitch": 0.4142263815300602,
          "rotation": 0,
          "target": "3-corner-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-top-view-with-markers",
      "name": "Top View (with Markers)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.3918103018699988,
        "pitch": 1.4214527157310552,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 1.0814064476233973,
          "pitch": 0.6250795587233071,
          "rotation": 0,
          "target": "1-ground-view"
        },
        {
          "yaw": -0.4510338888653358,
          "pitch": 0.012140052335308127,
          "rotation": 0,
          "target": "3-corner-view"
        },
        {
          "yaw": -1.3363668555719848,
          "pitch": -0.6455225764834136,
          "rotation": 0,
          "target": "0-pueblo-del-sol"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Pueblo del Sol",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
