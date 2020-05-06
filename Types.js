function state(pad,row,col)
{
    this.sPad=pad;
    this.row = row
    this.col =col
    this.Promising = function (i,j){
        //Bayad Bebinim Ke Aya Moshkeli Hast Ya Na dar satr i om va setoone j om
            var Row=[];
            for(var k =0;k<9;k++)
            {
                Row[k] = this.sPad[i][k];
            }
            if(!isUniqueRow(Row))
            {
                return false
            }
        
        
        
            var Col =[];
            for(var k = 0 ; k<9 ; k++)
            {
                Col[k] = this.sPad[k][j];
            }
            if(!isUniqueRow(Col))
            {
                
                return false
            }
            //Pointer Ha Ra Be Khooneye Aval Box Mibarim Bara Check Kardan Box
        if(i >=0 && i <=2)
        {
            i=0
        } else if(i >=3 && i <=5)
        {
            i = 3
        } else if(i >=6 && i <=8)
        {
            i = 6
        }
        if(j >=0 && j <=2)
        {
            j=0
        } else if(j >=3 && j <=5)
        {
            j = 3
        } else if(j >=6 && j <=8)
        {
            j = 6
        }
        
                var Box =[[],[],[]]
                for(var k = 0;k<3;k++)
                {
                    for(var h = 0;h<3;h++)
                    {
                        
                        Box[k][h] = this.sPad [i+k][j+h]
                    }
                }
                if(!isUniqueBox(Box))
                {
                    return false
                }
            //console.log(Box)
        return true;
    }
}

