module.exports = {
  crawlFrom: "/Users/tbh/workspace/ui-amboss/amboss-web-ui/app",
  includeSubComponents: true,
  importedFrom: "@amboss/design-system",
  processors: [
    ["count-components-and-props", { outputTo: "./src/reports/ui-amboss-report.json" }]
  ]
};