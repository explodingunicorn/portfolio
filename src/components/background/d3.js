import * as d3 from 'd3';

class d3background  {
  constructor() {
    this.graph;
    this.width;
    this.height;
    this.rectProfile = {
      width: 0,
      height: 0
    }
  }

  start() {
    this.graph = d3.select('#d3-background');
    this.width = document.getElementById('d3-background').getBoundingClientRect().width;
    this.height = document.getElementById('d3-background').getBoundingClientRect().height;

    this.appendRectangles();
  }

  appendRectangles() {
    const xSections = 10;
    const ySections = 5;
    const x = this.width/xSections;
    const y = this.height/ySections;

    this.rectProfile.width = x;
    this.rectProfile.height = x;

    for(let i = 0; i <= xSections; i++) {
      for(let j = 0; j <= ySections; j++) {
        this.graph.append('rect')
          .attr('width', this.rectProfile.width)
          .attr('height', this.rectProfile.height)
          .attr('x', x * i - (this.rectProfile.width/2))
          .attr('y', y * j + 50 - (this.rectProfile.height/2))
          .attr('fill', 'rgba(0, 0, 0, 0)')
          .attr('stroke', '#465C69')
          .attr('stroke-width', 1)
          .attr("transform", "rotate(" + 45 + "," + x*i + "," + y*j + ")")
      }
    }
  }
}

export default d3background;