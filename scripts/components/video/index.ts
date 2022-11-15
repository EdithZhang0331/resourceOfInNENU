import { checkKeys } from "@mr-hope/assert-type";
import { aliasResolve } from "../utils.js";
import type { VideoComponentOptions } from "./typings.js";

export const resolveVideo = (
  element: VideoComponentOptions,
  location = ""
): void => {
  // `$` alias resolve and file check
  if (element.src) element.src = aliasResolve(element.src, "File", location);

  checkKeys(
    element,
    {
      tag: "string",
      src: "string",
      loop: ["boolean", "undefined"],
      controls: ["boolean", "undefined"],
      title: ["string", "undefined"],
      poster: ["string", "undefined"],
      autoplay: ["boolean", "undefined"],
      startTime: ["number", "undefined"],
      danmuBtn: ["boolean", "undefined"],
      env: ["string[]", "undefined"],
    },
    location
  );

  if (element.danmuList) {
    element.danmuList.forEach((item) => {
      checkKeys(item, {
        text: ["string", "undefined"],
        color: ["string", "undefined"],
        time: ["number", "undefined"],
      });
    });
  }
};
