var salto=2;
var x=0;
var Caja:GameObject;

function Start () 
{
//Manejo y creacion de objetos
			//crear una caja
			Caja=GameObject.CreatePrimitive(PrimitiveType.Cube);
			//cambiar el nombre
			Caja.name="miCaja";
			//dar pocision de la caja
			Caja.transform.localScale.x=100;
			Caja.transform.localScale.y=100;
			Caja.transform.localScale.z=25;
			//dar color
			Caja.renderer.material.color = Color.cyan;
			//dar color con rgb y determinar tranparencia
			//Caja.renderer.material.color=Color(1,0,1,0.2);
			//determinar visibilidad
			Caja.renderer.enabled=true;
			//cambiar pocision
			Caja.transform.position = Vector3(100,0,100);
			//rotar objeto
			Caja.transform.rotation=Quaternion.Euler(0,0,0);

//manejo de spotlight y configuracion
			var foco: GameObject = new GameObject("miFoco");
			//añadir un spothligth al objeto
			foco.AddComponent(Light);
			//darle tipo a la luz
			foco.light.type=LightType.Spot;
			//cambiar de lugar el foco
			foco.transform.position=Vector3(0,100,-200);
			//apuntar a un objeto
			foco.transform.LookAt(Caja.transform.position);
			//rango de la luz
			foco.light.range=300;
			//intensidad de la luz
			foco.light.intensity=5;
			//abrir angulo de la luz
			foco.light.spotAngle=60;
			
//Manejo y creacion de la camara
			//crear el objeto
			var cam:GameObject=new GameObject("miCam");
			//añadir la camara al objeto
			cam.AddComponent(Camera);
			//cambiar la camara de pocision
			cam.camera.transform.position=Vector3(-100,100,-200);
			//apuntar la camara hacia un objeto
			cam.camera.transform.LookAt(Caja.transform.position);
			//cambiar angulo de la camara
			cam.camera.fieldOfView=35;
			//cambiar color de fondo de la camara
			cam.camera.backgroundColor=Color.white;
			//hacer un corte cercano a la camara
			cam.camera.nearClipPlane=350;
			//hacer un corte lejano a la camara
			cam.camera.farClipPlane=380;
			//guardamos la camara principal en una variable
			var camPrincipal = Camera.main;
			//modificar vistas de las camaras
			camPrincipal.enabled=true;
			cam.camera.enabled=false;
}

function Update () 
{
/*
	Caja.transform.position = Vector3(x*(Time.deltaTime*25),0,0);
	x+=salto;
	if(Caja.transform.position.x>200)
	{
		x=0;
	}
	Caja.transform.rotation=Quaternion.Euler(0,Caja.transform.eulerAngles.y+salto,0);
*/
}