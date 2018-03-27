import * as d3 from 'd3';

class d3background  {
  constructor() {
    this.graph;
    this.width;
    this.height;
    this.xDist
    this.yDist
    this.shapes = [];
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
    this.startMovement();
  }

  appendRectangles() {
    const xSections = 10;
    const ySections = 5;
    this.xDist = this.width/xSections;
    this.yDist = this.height/ySections;

    this.rectProfile.width = this.xDist;
    this.rectProfile.height = this.xDist;

    for(let i = 0; i <= xSections; i++) {
      this.shapes[i] = [];
      for(let j = 0; j <= ySections; j++) {
        const rect = this.graph.append('rect')
          .attr('width', this.rectProfile.width)
          .attr('height', this.rectProfile.height)
          .attr('x', this.xDist * i - (this.rectProfile.width/2))
          .attr('y', this.yDist * j + 50 - (this.rectProfile.height/2))
          .attr('fill', 'rgba(0, 0, 0, 0)')
          .attr('stroke', '#465C69')
          .attr('stroke-width', 1)
          .attr("transform", "rotate(" + 45 + "," + 
            (this.xDist * i) + 
            "," + (this.yDist * j + 50) + 
          ")")

          this.shapes[i][j] = rect;
      }
    }
  }

  startMovement() {
    setInterval(() => {
      const i = Math.floor((Math.random() * 10) + 0)
      const j = Math.floor((Math.random() * 5) + 0)

      this.shapes[i][j].attr("transform", "rotate(" + 135 + "," + 
        (this.xDist * i) + 
        "," + (this.yDist * j + 50) + 
      ")")
    }, 500);
  }
}

export default d3background;