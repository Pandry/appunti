window.MathJax = {
  tex: {
    macros: {
      anglebr: [ "{ ~ \\langle #1 \\rangle ~ }", 1 ], // parentesi angolare
      llbracket: "[\\![", // parentesi quadra doppia aperta [[
      rrbracket: "]\\!]", // parentesi quadra aperta chiusa ]]
      doublebr: [ "{ \\llbracket #1 \\rrbracket }", 1 ], // doppia parentesi quadra [[ e ]] (con un unico tratto agli estremi)
      cb: [ "\\biggl({#1 \\atop {#2}}\\biggr)", 2], // Coefficiente binomiale
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
