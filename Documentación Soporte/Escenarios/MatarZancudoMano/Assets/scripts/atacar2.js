public var destroyOnCollision : boolean = true; 
var block : GameObject;

function OnCollisionEnter(collision : Collision) 
{
   
	 if (collision.gameObject.name == "handd")
 	{
 		for(var i=0;i<2;i++)
 		{
	 		var numero=Random.Range(1,5);
		 	if(numero==1)
		 	{
		 		Instantiate(block,new Vector3(49,1.5,11),new Quaternion(0,0,0,0));
		 	}
		 	else if(numero==2)
		 	{
		 		Instantiate(block,new Vector3(-49,1.5,11),new Quaternion(0,270,45,0));
		 	}
		 	else if(numero==3)
		 	{
		 		Instantiate(block,new Vector3(0,1.5,21),new Quaternion(0,270,45,0));
		 	}
		 	else if(numero==4)
		 	{
		 		Instantiate(block,new Vector3(0,1.5,-21),new Quaternion(0,270,45,0));
		 	}
 		}
  		Destroy(gameObject);
 	}
}