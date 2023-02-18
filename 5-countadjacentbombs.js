        // fonction qui permet de calculer, pour chaque case de la grille qui n'est pas une bombe
        // le nombre de bombes adjacentes
        function countAdjacentBombs(){
                for (x = 0; x < height; x++){
                        for (y = 0; y < width; y++){
				// si la case sur laquelle on est (x;y) n'est pas une bombe, alors...
                                if( !$('.row'+x+'.col'+y).hasClass('isBomb') ){

                                        var count = 0; // compteur de bombes

                                        if($('.row'+(x-1)+'.col'+(y-1)).hasClass('isBomb')){ count++;}
                                        if($('.row'+(x-1)+'.col'+y).hasClass('isBomb')){ count++;}
                                        if($('.row'+(x-1)+'.col'+(y+1)).hasClass('isBomb')){ count++;}
                                        if($('.row'+x+'.col'+(y+1)).hasClass('isBomb')){ count++;}
                                        if($('.row'+x+'.col'+(y-1)).hasClass('isBomb')){ count++;}
                                        if($('.row'+(x+1)+'.col'+(y-1)).hasClass('isBomb')){ count++;}
                                        if($('.row'+(x+1)+'.col'+y).hasClass('isBomb')){ count++;}
                                        if($('.row'+(x+1)+'.col'+(y+1)).hasClass('isBomb')){ count++;}

                                        // on met la valeur du compteur dans la case (x;y)
                                        $('.row'+x+'.col'+y).text(count); 
                                }
                        }
                } 
        } // fin de la fonction countAdjacentBombs

