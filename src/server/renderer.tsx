import React, {StrictMode} from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import path from "path";
import express from "express";
import App from "../client/App/App";
import { ServerStyleSheet } from "styled-components";
import Html from "./html/html";
import { ChunkExtractor } from "@loadable/server";

export default async (req: express.Request,res: express.Response) => {
  const sheet = new ServerStyleSheet();

  const styles = sheet.getStyleTags();

  const loadableJson = path.resolve(__dirname, "./loadable-stats.json");

    const extractor = new ChunkExtractor({
        statsFile: loadableJson,
        entrypoints: ["client"],
    });

  const bootstrapModules = extractor.getMainAssets('script').map(({url}) =>url );

  const {pipe} = renderToPipeableStream(
      <Html styles={styles} children={sheet.collectStyles(
          <StrictMode>
              <StaticRouter location={req.url}>
                  <App />
              </StaticRouter>
          </StrictMode>
      )} />,
      {
        onAllReady() {
          res.statusCode = 200;
          res.setHeader('Content-type', 'text/html');
          pipe(res);
        },
        onShellError(x) {
          res.statusCode = 500;
          res.send(
              '<!doctype html><p>Loading...</p>'
          );
        },
        bootstrapModules,
      }
  );
};
