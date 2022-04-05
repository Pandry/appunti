window.MathJax = {
  tex: {
    macros: {
      anglebr: [ "{ ~ \\langle #1 \\rangle ~ }", 1 ], // parentesi angolare
      llbracket: "[\\![", // parentesi quadra doppia aperta [[
      rrbracket: "]\\!]", // parentesi quadra aperta chiusa ]]
      doublebr: [ "{ \\llbracket #1 \\rrbracket }", 1 ], // doppia parentesi quadra [[ e ]] (con un unico tratto agli estremi)
      cb: [ "\\biggl({#1 \\atop {#2}}\\biggr)", 2], // Coefficiente binomiale
      reals: "\\mathbb R",
      naturals: "\\mathbb N",
      limit:  [ "\\lim_{ x \\rightarrow #1 }", 1 ],
      pin: "+ \\infty",
      min: "- \\infty",
      // Graffa sotto con testo: $\underbrace{\hbox{Text}}_{\hbox{text below}}$
      // testo stacked: $\stackrel{\hbox{Text above}}{\hbox{Text below}}$
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
