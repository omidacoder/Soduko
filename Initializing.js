
//Initializing Matrix
function InitialSudoku()
{
    for(var i = 0;i<9;i++)
    {
        for(var j = 0;j<9;j++)
        {
            try{
            var temp = parsedJson[i.toString()][j.toString()]
            }
            catch(err)
            {

            }
            if(temp != undefined)
            {
                Pad[i][j] = Number(temp);
            }
        }
    }
    
}
//Rasme GamePad Ba Tavajoh Be Matrix
function DrawPad()
{
    for(var i = 0;i<9;i++)
    {
        for(var j = 0;j<9;j++)
        {
            Pad[i][j] = 0;
        }
    }
    var height = window.innerWidth/18;
    var tds = document.getElementsByTagName("td")
    var boldtr = document.getElementsByClassName("bold");
    var boldtd = document.getElementsByClassName("rightbold")
    for(var i = 0 ; i<tds.length;i++)
    {
        tds[i].setAttribute("height" , height.toString())
        tds[i].setAttribute("width" , height.toString())
        tds[i].style = "padding-top : "+(height/2-18).toString()+";font-size:28px;text-align:center"
    }
    for(var i = 0;i<boldtr.length;i++)
    {
        boldtr[i].style="border-bottom: 4px solid greenyellow;"
    }
    for(var i = 0;i<boldtd.length;i++)
    {
        boldtd[i].style="border-right: 4px solid greenyellow;"+"padding-top : "+(height/2-18).toString()+";font-size:28px;text-align:center"
    }
    
    InitialSudoku()
    syncArrayWithPad()
}
function syncArrayWithPad()
{
    for(var i = 0;i<9;i++)
    {
        for(var j = 0;j<9;j++)
        {
          if(Pad[i][j] != null)
          {
                var element = document.getElementById("col"+i.toString()+j.toString())
                element.innerHTML = Pad[i][j]
          }
            
        }
    }
}