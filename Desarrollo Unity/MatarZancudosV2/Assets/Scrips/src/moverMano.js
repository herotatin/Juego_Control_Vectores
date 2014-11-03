private var posInicialMano:Vector3; //Pocision inicial de la mano
private var aux:Vector3;// Pocision auxiliar para el movimiento de la mano
private var puntos:int; // puntos que se han hecho
var velocidadMano:int; // velocidad de la mano
var Zancudo:GameObject; //objeto para instanciar los zancudos
var impact : AudioClip; //efecto de sonido cuando se destruye un objeto zancudo
var MyStyle: GUIStyle; // Estilo del label que muetsra los puntos
var level:int;//nivel en el que va el jugador

function Start()
{
	posInicialMano=this.transform.position;
	aux=posInicialMano;
	velocidadMano=4;
	cargarZancudos(9,Zancudo);
	level=1;
}

function OnMouseDrag()
{
	print("se presiono");
}

function Update ()
{
	if(Input.GetMouseButtonDown(0))
	{
		aux=Camera.main.ScreenToWorldPoint(Input.mousePosition);
		aux.x=0;
		
		//Se envia un rayo para detectar las colisiones
		var ray: Ray = Camera.mainCamera.ScreenPointToRay(Input.mousePosition);
		var hit: RaycastHit;
		if(Physics.Raycast(ray,hit))
		{
			audio.PlayOneShot(impact, 1);
			puntos+=1;
			verificarnivel(hit.rigidbody.gameObject);
			Destroy(hit.rigidbody.gameObject);
		}
	}
}

function OnGUI()
{
	GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 480.0f, Screen.height / 320.0f, 1));	
	GUI.Label(new Rect(0,290,10,10),"Score: " + puntos,MyStyle);
}

function verificarnivel(objeto)
{
	if(puntos==10 && level==1)
	{
		cargarZancudos(20,objeto);
		level+=1;
	}
	if(puntos==30 && level==2)
	{
		cargarZancudos(50,objeto);
		level+=1;
	}
}
//Metodo para instanciar los zancudos
function cargarZancudos(numero,objeto)
{
	var posInicial:Vector3;
	for(var i=0;i<numero;i++)
	{
 		posInicial.z=Random.Range(-9,9);
 		posInicial.y=Random.Range(-5,5);
 		posInicial.x=-5;
		Instantiate(objeto,posInicial, this.transform.rotation);
	}
}