/**
 * ClickAndGoV3
 * Autor: Victor Purcallas Marchesi
 * Fecha:02/09/2013
 * Obtiene el Vector3 en donde se hace click con el raton
 * El objeto donde haces clic debe ser rigidbody
 * Se puede introducir desde el Inspector de Unity la posicion inicial del objeto en la escena
 *
 * Licencia:
 * This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.  See the
    GNU General Public License for more details. <http://www.gnu.org/licenses/&gt;.
 *
 **/
using UnityEngine;
using System.Collections;

public class ClickAndGo: MonoBehaviour {
	public Vector3 posicionInicial;  
	//Posicion inicial para introducir en el inspector.
	//Las variables publicas en unity pueden cambiarse desde el inspector
	bool inicio = true;
	private bool Mostrar = false;
	private bool pausa = false;
	private Transform camarapos;
	private int puntos;
	public GUIStyle MyStyle;
	public GUIStyle CONTINUARStyle;
	public GUIStyle REINICIARStyle;
	public GUIStyle SALIRStyle;

	//Solo estara True tras cargar la escena de la escena
	
	void Start(){//Cuando inicia el programa
		posicionInicial = this.transform.position;
		camarapos = GameObject.FindGameObjectWithTag("MainCamera").transform;
		//Cambia la posicion a la posicion inicial
	}              
	void Update() {
		if (Input.GetMouseButton(0)) {
			RaycastHit hit;
			Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);                                            
			//Hace tranza una linea desde el lugar la camara hasta la poscion del raton.
		if (Physics.Raycast(ray, out hit)) {      
			    if (hit.rigidbody != null){                                                                       
				//Si el objeto con el que colisiona es de tipo rigidbody
				MovimientoContinuoV2.posicion=hit.point;   
				transform.position = posicionInicial;
				//Cambia la variable posicion de la clase Movimiento Continuo
			}
				print(transform.position);
		}
	}
}
	void OnTriggerEnter2D(Collider2D col){
		if(col.tag == "Enemy")
		{
			if(this.GetComponent<AudioSource>().isPlaying == false)
				this.GetComponent<AudioSource>().Play();
			Destroy(col.gameObject);
			//col.gameObject.transform.position = new Vector3(camarapos.position.x + 20,Random.Range(-9f,13f),0);
			puntos+=1;

			//col.gameObject.transform.localScale = new Vector3(1,Random.Range(1f,4f),1);
		}
		if (col.tag == "Obstacle") {
			transform.position = posicionInicial;
			Time.timeScale = 0;

			//gameObject.SetActive(false);
			pausa=true;
			Mostrar = true;
		}
		
	}
	void OnGUI(){
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 480.0f, Screen.height / 320.0f, 1));
		
		GUI.Label(new Rect(0,290,10,10),"Score: " + puntos,MyStyle);


			if(Mostrar == true)
			{
				if(GUI.Button(new Rect(160,30,125,75),"",CONTINUARStyle))
				{
					Mostrar = false;
					Time.timeScale = 1;
					
				}
				
			if(GUI.Button(new Rect(160,130,125,75),"",REINICIARStyle))
				{
					Mostrar = false;
					Time.timeScale = 1;
					Application.LoadLevel("level1");
				}
				
			if(GUI.Button(new Rect(160,230,125,75),"",SALIRStyle))
				{
					Time.timeScale = 1;
					Application.LoadLevel("Menu");
					
				}
			}
				
		
	}
}