import { Component, OnInit } from '@angular/core';
import {MapConfig} from './classes/map';
//declare var ol: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  //map: Map;

ngOnInit(){
  var optionMap:olx.MapOptions;
  optionMap.target = 'map';
optionMap.layers= [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ];
   optionMap.view = new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        });     

let map = new ol.Map(optionMap);
}

}
