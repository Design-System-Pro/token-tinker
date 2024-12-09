import * as core from "@actions/core";
import { expandTypesMap, register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

async function run(): Promise<void> {
  const tokensPath = core.getInput("tokens-path") || "./tokens/";
  const buildPath = core.getInput("build-path") || "./build/";
  const isSingleFileExport = core.getInput("tokens-export-type") !== "multiple";

  register(StyleDictionary, {
    excludeParentKeys: isSingleFileExport,
    "ts/color/modifiers": {
      format: "hex",
    },
  });

  const transformer = new StyleDictionary({
    source: [`${tokensPath}/**/*.json`],
    preprocessors: ["tokens-studio"],
    expand: {
      typesMap: expandTypesMap,
    },
    platforms: {
      css: {
        transformGroup: "tokens-studio",
        transforms: ["name/kebab"],
        buildPath,
        files: [
          {
            destination: "variables.css",
            format: "css/variables",
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  });

  core.info("Cleaning all platforms...");
  await transformer.cleanAllPlatforms();
  core.info("Building all platforms...");
  await transformer.buildAllPlatforms();
}

run();
