window.MathJax = {
  tex: {
    macros: {
      anglebr: [ "{ ~ \\langle #1 \\rangle ~ }", 1 ],
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
