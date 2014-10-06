public var vel:float;
var posicion:Vector3;
var x:float;
var z:float;

function Start()
{
	posicion = this.transform.position;
}

function Update()
{
 	posicion.x=Random.Range(-0.65,2.65);
 	posicion.y=0.9;
 	posicion.z=Random.Range(-0.97,0.97);
	this.transform.position=Vector3.Lerp(this.transform.position, posicion, Time.deltaTime*vel);
	
}


