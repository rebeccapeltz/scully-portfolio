import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-portfolio",
  outDir: './dist/static',
  routes: {
    '/projects/:project': {
      type: 'contentFolder',
      project: {
        folder: "./projects"
      }
    },
  }
};