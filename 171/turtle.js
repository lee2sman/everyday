function turtle(){
 retro()

  for (let j = 0; j < 10; j++){

  penup()
  setpos(0,0)
  pendown()

      for (let i = 0; i < 2000; i++){
	
	penSize(randint(30))
	
	if (randint()<50)
	{
	  penup()
	} else 
	{
	  pendown()
	}

	  forward(randint())
	  right(randint())


    }

  }
}

