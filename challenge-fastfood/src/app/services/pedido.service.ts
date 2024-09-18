import { Injectable, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pendientesCocinar : Pedido[] = [];
  listosParaEntregar : Pedido[] = [];


  generarNumeroPedido() : number{
    return Math.floor((Math.random() * 1000) + 1);
  }

  agregarPendientesCocinar(pedido : Pedido) {
    this.pendientesCocinar.push(pedido);
  }

  cargarPendientesCocinar() : Pedido[] {
    return this.pendientesCocinar;
  }

  agregarPedidoListo(pedido : Pedido) {
    this.listosParaEntregar.push(pedido);
  }

  cargarPedidoListo() : Pedido[] {
    return this.listosParaEntregar;
  }
}
