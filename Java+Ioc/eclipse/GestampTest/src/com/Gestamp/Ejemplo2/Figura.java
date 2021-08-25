package com.Gestamp.Ejemplo2;

public class Figura {
	
	String nombre;
	double lado1, lado2;
	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getLado1() {
		return lado1;
	}

	public void setLado1(double lado1) {
		this.lado1 = lado1;
	}

	public double getLado2() {
		return lado2;
	}

	public void setLado2(double lado2) {
		this.lado2 = lado2;
	}

	Figura(String _nombre, double _lado1, double _lado2){
		
		nombre = _nombre;
		lado1 = _lado1;
		lado2 = _lado2;
		
	}
	
	void Muestra_Dato(double _lado1, double _lado2) {
		
		System.out.println("Area:" + Area(_lado1, _lado2) + "\nPerimetro:" + Perimetro(_lado1, _lado2));
		
	}
	
	double Area(double _lado1, double _lado2) {
		
		double formula = _lado1 * _lado2;
		
		return formula;
		
	}
	
	double Perimetro(double _lado1, double _lado2){
		
		double formula = 2*(_lado1 + _lado2);
		
		return formula;
		
	}
	
	
	
}
