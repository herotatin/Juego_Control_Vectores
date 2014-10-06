#pragma strict
var vida = 3;
var vida1 : GameObject;
var vida2 : GameObject;
var vida3 : GameObject;
var PLAYStyle : GUIStyle;
var EXITStyle : GUIStyle;
var RetryStyle : GUIStyle;
public var Mostrar = false;
var Herramienta :GameObject;
private var Mover : Component;




function Start () {
Mover = (Herramienta.GetComponent("ClickAndGo") as MonoBehaviour);
}

function Update () {
		
		if (vida >3){ 
			vida = 3; 
		} 
		if (vida == 3){ 
			//print("Esto es");
			
		} 
	//	if (vida == 4){ 
		
	//		vida5.active = false;
	//	} 
	//	if (vida == 3){ 
	//		vida4.active = false;
	//	} 
		if (vida == 2){ 
			vida3.active = false;
		} 
		if (vida == 1){ 
			vida2.active = false;
		} 
		if (vida == 0){ 
			
			//(Mover as MonoBehaviour).enabled = false;
			
			Herramienta.SetActive(false);
			Mostrar = true;
			OnGUI();
		} 
	}
	
	function OnTriggerEnter2D(col : Collider2D){
		if(col.tag == "Enemy")
		{
			vida-=1;
			Update();
		}
		
}
	function OnGUI(){
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 480.0f, Screen.height / 320.0f, 1));
		if(Mostrar == true)
		{
			if(GUI.Button(new Rect(80,100,150,100),"",PLAYStyle))
			{
				Mostrar = false;
				Time.timeScale = 1f;
				Application.LoadLevel("level1");
			}
			if(GUI.Button(new Rect(260,100,150,100),"",EXITStyle))
			{
 				Application.LoadLevel("Menu");
				
			}
		}
		}