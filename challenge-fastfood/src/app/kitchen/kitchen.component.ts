import { Component, inject, Input, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidoService } from '../services/pedido.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnInit {
  
  private pedidoService = inject(PedidoService);

  ngOnInit(): void {
    this.pendientesCocinar = this.pedidoService.cargarPendientesCocinar();
  }

  pendientesCocinar : Pedido[] = [];
  pedidosEnCoccion : Pedido[] = [];
  pedidoCoccion : Pedido = {} as Pedido;
  enCoccion : boolean = false;


  cocinarPedido(pedidoAcocinar : Pedido, index : number) {
    this.enCoccion = true;
    this.pedidoCoccion = pedidoAcocinar;
    //this.pendientesCocinar = this.pendientesCocinar.filter(item => item !== pedidoAcocinar);
    this.pedidosEnCoccion.push(pedidoAcocinar);
    this.pedidoService.quitarPedido(index, this.pendientesCocinar);
  }

  terminarPedido(pedidoCoccion : Pedido) {
    this.enCoccion = false;
    this.pedidoService.agregarPedidoListo(pedidoCoccion);
    //this.pedidoCoccion = {} as Pedido;
    this.pedidoService.quitarPedido(0, this.pedidosEnCoccion);
    console.log(this.pedidosEnCoccion);


  }

  





}
