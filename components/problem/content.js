class ProblemContent {
  $container = document.createElement('div');
  constructor(content = '') {
    console.log(content);
    const converter = new showdown.Converter();
    this.$container.innerHTML = converter.makeHtml(content);
  }
}

export { ProblemContent };
