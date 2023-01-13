class Example {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h1>never write css in the main.css file, only in the index.scss file</h1>"
    this.handleClick = this.handleClick.bind(this);

    this.ele.addEventListener('click', this.handleClick())
  }

  handleClick(e) {
    e.preventDefault();

    this.ele.children[0].innerText = 'Ouch!'
  }
}

export default Example;