/** This file was autogenerated by Haiku at 20170821212752. */
/** Copyright (c) 2017 taylor2. All rights reserved. */
module.exports = {
  metadata: {
    uuid: "HAIKU_SHARE_UUID",
    type: "haiku",
    name: "particle",
    relpath: "code/main/code.js",
    player: "2.1.34",
    version: "0.0.14",
    organization: "taylor2",
    project: "particle",
    branch: "master"
  },

  options: {},
  states: { oval: { type: "number", value: 1 } },
  eventHandlers: {},
  timelines: {
    Default: {
      "haiku:e63415a8784c": {
        "style.WebkitTapHighlightColor": { "0": { value: "rgba(0,0,0,0)" } },
        "style.position": { "0": { value: "relative" } },
        "style.overflowX": { "0": { value: "hidden" } },
        "style.overflowY": { "0": { value: "hidden" } },
        "sizeAbsolute.x": { "0": { value: 16, edited: true } },
        "sizeAbsolute.y": { "0": { value: 35, edited: true } },
        "sizeMode.x": { "0": { value: 1 } },
        "sizeMode.y": { "0": { value: 1 } },
        "sizeMode.z": { "0": { value: 1 } }
      },
      "haiku:d929414fce99": {
        viewBox: { "0": { value: "0 0 14 14" } },
        "style.position": { "0": { value: "absolute" } },
        "style.margin": { "0": { value: "0" } },
        "style.padding": { "0": { value: "0" } },
        "style.border": { "0": { value: "0" } },
        "sizeAbsolute.x": { "0": { value: 14 } },
        "sizeMode.x": { "0": { value: 1 } },
        "sizeAbsolute.y": { "0": { value: 14 } },
        "sizeMode.y": { "0": { value: 1 } },
        "translation.x": { "0": { value: 2, edited: true } },
        "translation.y": {
          "0": { value: 2, edited: true, curve: "easeInOutQuad" },
          "1400": { value: 15, edited: true, curve: "easeInOutQuad" },
          "2733": { value: 2, edited: true }
        },
        "style.zIndex": { "0": { value: 1 } },
        opacity: {
          "0": {
            value: function({ oval }) {
              return oval ? 1 : 0;
            },
            edited: true
          }
        }
      },
      "haiku:5532ffcca63d": {
        cx: { "0": { value: "7" } },
        cy: { "0": { value: "6" } },
        r: { "0": { value: "5" } }
      },
      "haiku:956a831b3c84": {
        x: { "0": { value: "-35.0%" } },
        y: { "0": { value: "-25.0%" } },
        filterUnits: { "0": { value: "objectBoundingBox" } },
        "sizeProportional.x": { "0": { value: 1.7 } },
        "sizeMode.x": { "0": { value: 0 } },
        "sizeProportional.y": { "0": { value: 1.7 } },
        "sizeMode.y": { "0": { value: 0 } }
      },
      "haiku:763db6be7f9a": {
        dx: { "0": { value: "0" } },
        dy: { "0": { value: "1" } },
        in: { "0": { value: "SourceAlpha" } },
        result: { "0": { value: "shadowOffsetOuter1" } }
      },
      "haiku:c18cd0bf3945": {
        radius: { "0": { value: "2.2" } },
        operator: { "0": { value: "erode" } },
        in: { "0": { value: "SourceAlpha" } },
        result: { "0": { value: "shadowInner" } }
      },
      "haiku:62ccfa028f6d": {
        dx: { "0": { value: "0" } },
        dy: { "0": { value: "1" } },
        in: { "0": { value: "shadowInner" } },
        result: { "0": { value: "shadowInner" } }
      },
      "haiku:7b9b29c8e39d": {
        in: { "0": { value: "shadowOffsetOuter1" } },
        in2: { "0": { value: "shadowInner" } },
        operator: { "0": { value: "out" } },
        result: { "0": { value: "shadowOffsetOuter1" } }
      },
      "haiku:9e309207973e": {
        stdDeviation: { "0": { value: "1" } },
        in: { "0": { value: "shadowOffsetOuter1" } },
        result: { "0": { value: "shadowBlurOuter1" } }
      },
      "haiku:35a2ef7aa608": {
        values: {
          "0": {
            value: "0 0 0 0 0.0118015037   0 0 0 0 0.0187563495   0 0 0 0 0.0203018707  0 0 0 0.508491848 0"
          }
        },
        in: { "0": { value: "shadowBlurOuter1" } }
      },
      "haiku:f5934bcb7463": {
        stroke: { "0": { value: "none" } },
        "stroke-width": { "0": { value: "1" } },
        fill: { "0": { value: "none" } },
        "fill-rule": { "0": { value: "evenodd" } }
      },
      "haiku:608b67120ff1": {
        fill: { "0": { value: "black" } },
        "fill-opacity": { "0": { value: "1" } },
        filter: { "0": { value: "url(#filter-2-1414ca)" } },
        "xlink:href": { "0": { value: "#path-1-1414ca" } }
      },
      "haiku:4a4aa3fd36e3": {
        stroke: { "0": { value: "#03262C" } },
        "stroke-width": { "0": { value: "2.2" } },
        cx: { "0": { value: "7" } },
        cy: { "0": { value: "6" } },
        r: { "0": { value: "3.9" } }
      },
      "haiku:94d3b10dec0e": {
        viewBox: { "0": { value: "0 0 14 14" } },
        "style.position": { "0": { value: "absolute" } },
        "style.margin": { "0": { value: "0" } },
        "style.padding": { "0": { value: "0" } },
        "style.border": { "0": { value: "0" } },
        "sizeAbsolute.x": { "0": { value: 14 } },
        "sizeMode.x": { "0": { value: 1 } },
        "sizeAbsolute.y": { "0": { value: 14 } },
        "sizeMode.y": { "0": { value: 1 } },
        "translation.x": { "0": { value: 2, edited: true } },
        "translation.y": {
          "0": { value: 2, edited: true, curve: "easeInOutQuad" },
          "1400": { value: 17, edited: true, curve: "easeInOutQuad" },
          "2733": { value: 2, edited: true }
        },
        "style.zIndex": { "0": { value: 2 } },
        opacity: {
          "0": {
            value: function({ oval }) {
              return oval ? 0 : 1;
            },
            edited: true
          }
        }
      },
      "haiku:4489671a0b75": {
        d: {
          "0": {
            value: "M8.25,4.75 L8.25,2.25 C8.25,1.55964406 7.69035594,1 7,1 C6.30964406,1 5.75,1.55964406 5.75,2.25 L5.75,2.25 L5.75,4.75 L3.25,4.75 C2.55964406,4.75 2,5.30964406 2,6 L2,6 L2,6 C2,6.69035594 2.55964406,7.25 3.25,7.25 L3.25,7.25 L5.75,7.25 L5.75,9.75 C5.75,10.4403559 6.30964406,11 7,11 C7.69035594,11 8.25,10.4403559 8.25,9.75 L8.25,7.25 L10.75,7.25 C11.4403559,7.25 12,6.69035594 12,6 C12,5.30964406 11.4403559,4.75 10.75,4.75 L8.25,4.75 Z"
          }
        }
      },
      "haiku:facf1ed4c9f1": {
        x: { "0": { value: "-35.0%" } },
        y: { "0": { value: "-25.0%" } },
        filterUnits: { "0": { value: "objectBoundingBox" } },
        "sizeProportional.x": { "0": { value: 1.7 } },
        "sizeMode.x": { "0": { value: 0 } },
        "sizeProportional.y": { "0": { value: 1.7 } },
        "sizeMode.y": { "0": { value: 0 } }
      },
      "haiku:7e04086e1295": {
        dx: { "0": { value: "0" } },
        dy: { "0": { value: "1" } },
        in: { "0": { value: "SourceAlpha" } },
        result: { "0": { value: "shadowOffsetOuter1" } }
      },
      "haiku:0dd80f741100": {
        stdDeviation: { "0": { value: "1" } },
        in: { "0": { value: "shadowOffsetOuter1" } },
        result: { "0": { value: "shadowBlurOuter1" } }
      },
      "haiku:7e2f68d0efa0": {
        values: {
          "0": {
            value: "0 0 0 0 0.0118015037   0 0 0 0 0.0187563495   0 0 0 0 0.0203018707  0 0 0 0.343665082 0"
          }
        },
        in: { "0": { value: "shadowBlurOuter1" } }
      },
      "haiku:5e7a34c1b9bc": {
        stroke: { "0": { value: "none" } },
        "stroke-width": { "0": { value: "1" } },
        fill: { "0": { value: "none" } },
        "fill-rule": { "0": { value: "evenodd" } }
      },
      "haiku:2553cb380705": {
        fill: { "0": { value: "black" } },
        "fill-opacity": { "0": { value: "1" } },
        filter: { "0": { value: "url(#filter-2-8e2378)" } },
        "xlink:href": { "0": { value: "#path-1-8e2378" } }
      },
      "haiku:507e3d59935e": {
        fill: { "0": { value: "#00272D" } },
        "fill-rule": { "0": { value: "evenodd" } },
        "xlink:href": { "0": { value: "#path-1-8e2378" } }
      }
    }
  },

  template: {
    elementName: "div",
    attributes: { "haiku-title": "particle", "haiku-id": "e63415a8784c" },
    children: [
      {
        elementName: "svg",
        attributes: {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          source: "designs/particle.sketch.contents/slices/ov.svg",
          "haiku-id": "d929414fce99",
          "haiku-title": "ov"
        },
        children: [
          {
            elementName: "title",
            attributes: { "haiku-id": "3489a7824cf5" },
            children: ["ov"]
          },
          {
            elementName: "desc",
            attributes: { "haiku-id": "0f3532466139" },
            children: ["Created with sketchtool."]
          },
          {
            elementName: "defs",
            attributes: { "haiku-id": "90bc6622bb86" },
            children: [
              {
                elementName: "circle",
                attributes: { id: "path-1-1414ca", "haiku-id": "5532ffcca63d" },
                children: []
              },
              {
                elementName: "filter",
                attributes: {
                  id: "filter-2-1414ca",
                  "haiku-id": "956a831b3c84",
                  "sizeMode.x": 0,
                  "sizeMode.y": 0
                },
                children: [
                  {
                    elementName: "feOffset",
                    attributes: { "haiku-id": "763db6be7f9a" },
                    children: []
                  },
                  {
                    elementName: "feMorphology",
                    attributes: { "haiku-id": "c18cd0bf3945" },
                    children: []
                  },
                  {
                    elementName: "feOffset",
                    attributes: { "haiku-id": "62ccfa028f6d" },
                    children: []
                  },
                  {
                    elementName: "feComposite",
                    attributes: { "haiku-id": "7b9b29c8e39d" },
                    children: []
                  },
                  {
                    elementName: "feGaussianBlur",
                    attributes: { "haiku-id": "9e309207973e" },
                    children: []
                  },
                  {
                    elementName: "feColorMatrix",
                    attributes: { type: "matrix", "haiku-id": "35a2ef7aa608" },
                    children: []
                  }
                ]
              }
            ]
          },
          {
            elementName: "g",
            attributes: { id: "Page-1", "haiku-id": "f5934bcb7463" },
            children: [
              {
                elementName: "g",
                attributes: { id: "ov", "haiku-id": "d4f6bd801fd8" },
                children: [
                  {
                    elementName: "use",
                    attributes: { "haiku-id": "608b67120ff1" },
                    children: []
                  },
                  {
                    elementName: "circle",
                    attributes: { "haiku-id": "4a4aa3fd36e3" },
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        elementName: "svg",
        attributes: {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          source: "designs/particle.sketch.contents/slices/pls.svg",
          "haiku-id": "94d3b10dec0e",
          "haiku-title": "pls"
        },
        children: [
          {
            elementName: "title",
            attributes: { "haiku-id": "9efd11ec7ce3" },
            children: ["pls"]
          },
          {
            elementName: "desc",
            attributes: { "haiku-id": "b4ecce0d7c29" },
            children: ["Created with sketchtool."]
          },
          {
            elementName: "defs",
            attributes: { "haiku-id": "48c55c1c42e6" },
            children: [
              {
                elementName: "path",
                attributes: { id: "path-1-8e2378", "haiku-id": "4489671a0b75" },
                children: []
              },
              {
                elementName: "filter",
                attributes: {
                  id: "filter-2-8e2378",
                  "haiku-id": "facf1ed4c9f1",
                  "sizeMode.x": 0,
                  "sizeMode.y": 0
                },
                children: [
                  {
                    elementName: "feOffset",
                    attributes: { "haiku-id": "7e04086e1295" },
                    children: []
                  },
                  {
                    elementName: "feGaussianBlur",
                    attributes: { "haiku-id": "0dd80f741100" },
                    children: []
                  },
                  {
                    elementName: "feColorMatrix",
                    attributes: { type: "matrix", "haiku-id": "7e2f68d0efa0" },
                    children: []
                  }
                ]
              }
            ]
          },
          {
            elementName: "g",
            attributes: { id: "Page-1", "haiku-id": "5e7a34c1b9bc" },
            children: [
              {
                elementName: "g",
                attributes: { id: "pls", "haiku-id": "ff112a940692" },
                children: [
                  {
                    elementName: "use",
                    attributes: { "haiku-id": "2553cb380705" },
                    children: []
                  },
                  {
                    elementName: "use",
                    attributes: { "haiku-id": "507e3d59935e" },
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};