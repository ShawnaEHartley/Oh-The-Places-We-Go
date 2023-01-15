class Example {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h1>Oh! The Places We Go</h1>"
    this.handleHover = this.handleHover.bind(this);
    this.handleUnHover = this.handleUnHover.bind(this);

    this.ele.addEventListener('mouseover', this.handleHover)
    this.ele.addEventListener('mouseout', this.handleUnHover)
  }

  handleHover(e) {
    e.preventDefault();
    this.ele.children[0].innerText = 'coming soon'
  }

  handleUnHover(e) {
    e.preventDefault();
    this.ele.children[0].innerText = "Oh! The Places We Go"
  }

  


  // const svg = d3.select('svg')

  // svg
  //   .append('circle')
  //   .attr('cs', '50%')
}



export default Example;

