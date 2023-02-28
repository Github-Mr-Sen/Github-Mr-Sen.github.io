import {
  flowRendererV2,
  flowStyles
} from "./chunk-KBQUK2US.js";
import {
  flowDb,
  parser$1
} from "./chunk-2T4WLK7T.js";
import "./chunk-NKGGKU5I.js";
import "./chunk-7AADPZNG.js";
import "./chunk-KOSEKJY4.js";
import "./chunk-Z5QOKXEO.js";
import "./chunk-EJHJZSYK.js";
import "./chunk-2Y4R5XW7.js";
import "./chunk-UA7A6VCS.js";
import {
  require_dist
} from "./chunk-L3CNDGPF.js";
import "./chunk-UD5A6DAI.js";
import "./chunk-NMR7SKA6.js";
import {
  require_moment_min,
  setConfig
} from "./chunk-VGJ52J2T.js";
import {
  __toESM
} from "./chunk-OZI5HTJH.js";

// node_modules/mermaid/dist/flowDiagram-v2-566a30e4.js
var import_sanitize_url = __toESM(require_dist(), 1);
var import_moment_mini = __toESM(require_moment_min(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-566a30e4-GNT7Y3ND.js.map
