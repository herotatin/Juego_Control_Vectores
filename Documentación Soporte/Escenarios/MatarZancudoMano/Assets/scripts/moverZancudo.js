public var numero:int;
public var targetPosition:Vector3;
public var vel:int;

function Start () 
{
	targetPosition=this.transform.position;
	vel=1;
}

function Update () 
{

	numero=Random.Range(1,9);
	if(numero==1) metodo1();
	else if(numero==2) metodo2();
	else if(numero==3) metodo3();
	else if(numero==4) metodo4();
	else if(numero==5) metodo5();
	else if(numero==6) metodo6();
	else if(numero==7) metodo7();
	else if(numero==8) metodo8();
}

function metodo1()
{
	if(this.transform.position.x+10<50)
	{
		targetPosition.x=this.transform.position.x+10;
		this.transform.position = Vector3.Slerp (this.transform.position, targetPosition, Time.deltaTime * vel);
		
	}
}
function metodo2()
{
	if(this.transform.position.x+10<50&&this.transform.position.z+10<22)
	{
		{
			targetPosition.x=this.transform.position.x+1;
			this.transform.position = Vector3.Slerp (this.transform.position, targetPosition, Time.deltaTime * vel);
		}
	}
}

function metodo3()
{
	{
		if(this.transform.position.z+10<22)
		{
			targetPosition.z=this.transform.position.z+10;
			transform.position = Vector3.Slerp (transform.position, targetPosition, Time.deltaTime * vel);
		}
	}
}

function metodo4()
{
	{
		if(this.transform.position.x-10>-50&&this.transform.position.z+10<22)
		{
			targetPosition.x=this.transform.position.x-10;
			targetPosition.z=this.transform.position.z+10;
			transform.position = Vector3.Slerp (transform.position, targetPosition, Time.deltaTime * vel);
		}
	}
}

function metodo5()
{
	{
		if(this.transform.position.x-10>-50)
		{
			targetPosition.x=this.transform.position.x-10;
			transform.position = Vector3.Slerp (transform.position, targetPosition, Time.deltaTime * vel);
		}
	}
}


function metodo6()
{
	{
		if(this.transform.position.x-10>-50&&this.transform.position.z-10>-22)
		{
			targetPosition.x=this.transform.position.x-10;
			targetPosition.z=this.transform.position.z-10;
			transform.position = Vector3.Slerp (transform.position, targetPosition, Time.deltaTime * vel);
		}
	}
}

function metodo7()
{
	{
		if(this.transform.position.z-10>=-22)
		{
			targetPosition.z=this.transform.position.z-10;
			transform.position = Vector3.Slerp (transform.position, targetPosition, Time.deltaTime * vel);
		}
	}
}

function metodo8()
{
	{
		if(this.transform.position.x+10<50&&this.transform.position.z-10>-22)
		{
			targetPosition.x=this.transform.position.x+10;
			targetPosition.z=this.transform.position.z-10;
			transform.position = Vector3.Slerp (transform.position, targetPosition, Time.deltaTime * vel);
		}
	}
}