



async function FindAnswer()
{
    
    var initialstate = new state(Pad,0,0);
    var loopcounter = 0;
    await Back_Tracking_Search(initialstate,loopcounter);
    
    syncArrayWithPad();

}
// This Algorithm Will check row by row
function Back_Tracking_Search(State,loopcounter)
{
    
    //Bayad Rooye Hameye Cell Ha Harkat Koim Va Meghdar Dehi Konim
    //Initial State Avalin Bar Be In Method Dade Mishavad
    if(State.sPad[State.row][State.col] !=0)
    { //Initialize Shode Pas Be Cell Badi Boro
        var next;
        if(State.col != 8)
        next  = new state(Pad,State.row,State.col+1)
        else
        next = new state(Pad,State.row+1,0);
        Back_Tracking_Search(next,loopcounter+1)
    }
    else{
        
        
        var boolean = false;

        for(var i = 9;i>=1;i--)
        {
            //Test 9 Ta 1 Rooye In Cell
           Pad[State.row][State.col] = i;
           State.sPad = Pad;
            
           if(State.Promising(State.row,State.col))
           {
               boolean = true;
            var next;
            if(State.col != 8)
            next  = new state(Pad,State.row,State.col+1)
            else
            next = new state(Pad,State.row+1,0);
            //Residan Be Inja Yani Movafaghiat ta Injaye Kar
            
            syncArrayWithPad();
        var success = Back_Tracking_Search(next,loopcounter+1);
            if(success)
            {
                //testing
                
                console.log("Halgheye "+ loopcounter.toString() + "Shekaste Shod")
                break;
                
            }
            else{
                boolean = false;
            }
            
            
            
                
            
           }
        }
        if(!boolean)
        {
            //Bayad Backtrack Konim Pas In Khane Ra Be 0 Barmigardanim
            Pad[State.row][State.col] = 0;
            // var prev;
            // if(State.col == 0)
            // {
            //     prev = new state(Pad,State.row-1,8)
            // }
            // else{
            //     prev = new state(Pad,State.row,State.col-1)
            // }
            // Back_Tracking_Search(prev,privious+1)

        }
        return boolean;
        
        
        
    }
    


}


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
function isUniqueRow(row)
{
    for(var i = 0 ; i<9;i++)
    {
        for(var j = i+1; j<9;j++)
        {
            if(row[i]==row[j])
            {
                if(row[i] != 0)
                return false
            }
        }
    }
    return true
}
function isUniqueBox(Box)
{
    for(var i = 0;i<9;i++)
    {
        for(var j = i+1;j<9;j++)
        {
            if(Box[Math.floor(i/3)][i%3] == Box[Math.floor(j/3)][j%3])
            {
                if(Box[Math.floor(i/3)][i%3] != 0)
                return false
            }
        }
    }
    return true;
}
