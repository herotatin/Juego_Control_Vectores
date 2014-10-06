public var destroyOnCollision : boolean = true; 
private var posInicial:Vector3;
private var rotInicial:Quaternion;
var node1 : Transform;
var block : GameObject;
var n:int;

function Start()
{
	posInicial=this.transform.position;
	rotInicial=this.transform.rotation;
}

function OnCollisionEnter(collision:Collision) {
   
	 if (destroyOnCollision)
	 {
	 	Instantiate(block,new Vector3(0,10,0),new Quaternion(0,270,45,0));
	  	Destroy (gameObject);
	 }
}