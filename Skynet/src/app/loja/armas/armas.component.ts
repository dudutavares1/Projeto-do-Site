import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.scss']
})
export class ArmasComponent implements OnInit {

  loja: any = [
  {
 name: "AK-47 | Legião de Anubis",
 valor: "400,00",
 status: "Nova de fabrica",
codigo: "0001",
 avatar: "https://csgostash.com/storage/img/skin_sideview/s1285.png?id=4816ffb3a25e858c60dc",
},

{
  name: "AWP | Incêndios",
  valor: "205,00",
  status: "Nova de fabrica",
 codigo: "0003",
  avatar: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_asimov_light_large.32d9045f8a2bcd13ca18390cc9fd82026e7195ab.png",
 },

 {
  name: "AWP | Relâmpago",
  valor: "800,00",
  status: "Pouco Usada",
 codigo: "0004",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s79.png?id=e608c27dc67e70ddfa6c",
 },

 {
  name: "AWP | Fade",
  valor: "4.000,00",
  status: "Nova de fabrica",
 codigo: "0005",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s1321.png?id=25d117959446ceac0f3b",
 },

 {
  name: "AWP | Fever Dream",
  valor: "100,00",
  status: "Pouco Usada",
 codigo: "0006",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s845.png?id=efaea6e928c015b6e8de",
 },



]

  constructor() { }

  ngOnInit(): void {
  }

}
