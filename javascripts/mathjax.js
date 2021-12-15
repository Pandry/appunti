window.MathJax = {
  tex: {
    macros: {
      anglebr: [ "{ ~ \\langle #1 \\rangle ~ }", 1 ],
      llbracket: "[\\![",
      rrbracket: "]\\!]",
      doublebr: [ "{ \\llbracket #1 \\rrbracket }", 1 ],
      cb: [ "\\biggl({#1 \\atop {#2}}\\biggr)", 2],
    },
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { // This integrates MathJax with instant loading.
  MathJax.typesetPromise()
})
