var smooth:int; // Determines how quickly object moves towards position
private var targetPosition:Vector3;
private var posInicial:Vector3;
private var aux:Vector3;
public var destroyOnCollision : boolean = true; 
var Caja:GameObject;

function Start()
{
	posInicial=this.transform.position;
}
function Update ()
{
	if(transform.position.y<2)
	{
		targetPosition=posInicial;
	}
	
	transform.position = Vector3.Slerp (transform.position, targetPosition, Time.deltaTime * smooth);
    if(Input.GetKeyDown(KeyCode.Mouse0))
    {
    	smooth=20;
        var playerPlane = new Plane(Vector3.up, transform.position);
        var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        var hitdist = 0.0;

        if (playerPlane.Raycast(ray, hitdist)) 
        {
            var targetPoint = ray.GetPoint(hitdist);
            targetPosition = ray.GetPoint(hitdist);
        }
        targetPosition.y=1.8;
	}
}