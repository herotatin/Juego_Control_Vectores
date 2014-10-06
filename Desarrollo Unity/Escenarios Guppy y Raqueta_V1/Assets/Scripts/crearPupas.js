#pragma strict
var larva:GameObject;
function Start () {
cargarLarvas();
}

function cargarLarvas()
{
	var posInicial:Vector3;;
	for(var i=0;i<9;i++)
	{
 		posInicial.x=Random.Range(-3.8,10.2);
 		posInicial.y=Random.Range(-2.2,6);
 		posInicial.z=0;
		Instantiate(larva, posInicial, this.transform.rotation);
	}
}