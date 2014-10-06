using UnityEngine;
using System.Collections;

public class Caracteristicas : MonoBehaviour {

	public int vidas = 5;

	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
				if (vidas < 1) {

						print (vidas);
						if (vidas == 2) {

						}


				}
		}

	void OnTriggerEnter2D(Collider2D col){
		if(col.tag == "Enemy")
		{
			vidas-=1;
		}
	}
}

