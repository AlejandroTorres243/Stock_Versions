package com.Gestamp.Ejercicio8;

import java.util.ArrayList;

public class Mercado {

	String producto;
	float importe;
	int conteo_producto;
	
	public float getImporte() {
		return importe;
	}
	public void setImporte(float importe) {
		this.importe = importe;
	}
	public int getConteo_producto() {
		return conteo_producto;
	}
	public String getProducto() {
		return producto;
	}
	public void setProducto(String producto) {
		this.producto = producto;
	}
	public float getCompra() {
		return importe;
	}
	public void setCompra(float compra) {
		this.importe = compra;
	}
	public Mercado(String producto, float importe) {
		super();
		this.producto = producto;
		this.importe = importe;
		conteo_producto++;
	}
	
}
