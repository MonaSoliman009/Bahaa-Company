import { Component, OnInit } from '@angular/core';
declare const $:any
@Component({
  selector: 'app-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.css']
})
export class VectorMapComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    $('#world_map').vectorMap({
      map: 'world_mill',
      scaleColors : ['#03a9f4', '#03a9f4'],
      normalizeFunction : 'polynomial',
      hoverOpacity : 0.7,
      hoverColor : false,
      regionStyle : {
        initial : {
          fill: '#ff0080'
        }
      },
      backgroundColor : 'transparent'
    });
    $('#usa').vectorMap({
      map: 'us_aea',
      scaleColors : ['#03a9f4', '#03a9f4'],
      normalizeFunction : 'polynomial',
      hoverOpacity : 0.7,
      hoverColor : false,
      regionStyle : {
        initial : {
          fill: '#ff0080'
        }
      },
      backgroundColor : 'transparent'
    });
    $('#india').vectorMap({
      map : 'in_mill',
      backgroundColor : 'transparent',
      regionStyle : {
        initial : {
          fill: '#ff0080'
        }
      }
    });
    $('#uk').vectorMap({map: 'uk_countries_mill',backgroundColor: 'transparent',
          regionStyle: {
          initial: {
            fill: '#ff0080'
          }
          }});
    $('#russia').vectorMap({
      map: 'ru_mill',
      backgroundColor: 'transparent',
          regionStyle: {
          initial: {
            fill: '#ff0080'
          }
          }});
    }
  }



