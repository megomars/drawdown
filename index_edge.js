/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'START_-_01',
                type: 'video',
                tag: 'video',
                rect: ['0px', '188px','100%','562px','auto', 'auto'],
                autoplay: 'autoplay',
                source: ['drawdownSTART/START%20-%2001.mp4'],
                preload: 'auto'
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '191px','1042px','556px','auto', 'auto'],
                fill: ["rgba(247,0,0,0.42)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['880px', '191px','120px','556px','auto', 'auto'],
                fill: ["rgba(59,59,59,0.42)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['0px', '102px','120px','80px','auto', 'auto'],
                fill: ["rgba(59,59,59,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle3Copy',
                type: 'rect',
                rect: ['133px', '102px','120px','80px','auto', 'auto'],
                fill: ["rgba(59,59,59,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle3Copy2',
                type: 'rect',
                rect: ['269px', '102px','120px','80px','auto', 'auto'],
                fill: ["rgba(59,59,59,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3Copy2}": [
                ["style", "top", '102px'],
                ["style", "left", '269px'],
                ["style", "width", '120px']
            ],
            "${_Rectangle3Copy}": [
                ["style", "top", '102px'],
                ["style", "left", '133px'],
                ["style", "width", '120px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '191px'],
                ["style", "height", '556px'],
                ["color", "background-color", 'rgba(59,59,59,0.42)'],
                ["style", "left", '880px'],
                ["style", "width", '120px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '1000px'],
                ["style", "height", '750px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["style", "top", '191px'],
                ["color", "background-color", 'rgba(247,0,0,0.42)'],
                ["style", "height", '556px'],
                ["style", "width", '1042px']
            ],
            "${_START_-_01}": [
                ["style", "top", '188px'],
                ["property", "volume", '0'],
                ["style", "height", '562px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_Rectangle3}": [
                ["style", "top", '102px'],
                ["style", "left", '0px'],
                ["style", "width", '120px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-444615836");
