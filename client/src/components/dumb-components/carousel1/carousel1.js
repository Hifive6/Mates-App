import React, { Component } from 'react'

export default class Carousel1 extends Component {
  render() {
    return (
      <div>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="Carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="../carousel1/eric.jpg" alt="First slide"></img>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="../pic/elevate-755079-unsplash.jpg" alt="Second slide"></img>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="../pic/tiago-rosado-752257-unsplash.jpg" alt="Third slide"></img>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
        
      </div>
    )
  }
}
