
var data = document.getElementsByName('num');
        
        function solve()
        {
         
            // let v = [9][9];
            let v = Array.from(Array(9), () => new Array(9));
          

            for( let k=0;k<data.length; k++)
            {
                let i=Math.floor(k/9);
                let j=Math.floor(k%9);
               
                v[i][j] = parseInt(data[k].value);
                
            }

            
            

//////////////////////////////////////////////////////////
//  SOLVE SUDOKU
/////////////////////////////////////////////////////////

            function func(row ,col ,block ,v, y,x )
            {
                // console.log(row);
                if(y==9)
                {
                    return true;
                }
                
                let b = Math.floor(3*(Math.floor(y/3))) + Math.floor(x/3) ;
                
                if( v[y][x]==0)
                {
                    // console.log(v[y][x]);
                    for( let i=0;i<9;i++)
                    {
                        // console.log(block[y][x],row[y][i], col[x][i]);
                        if( block[b][i]==0 && row[y][i]==0 && col[x][i]==0 )
                        {
                            block[b][i]=1;
                            row[y][i]=1;
                            col[x][i]=1;
                            
                            v[y][x]=i+1;
                            // console.log(v[y][x]);
                            if(x==8)
                            {
                                if(func(row,col,block,v,y+1,0))
                                {
                                    return true;
                                }
                            }
                            else
                            {
                                if( func(row,col,block,v,y,x+1))
                                {
                                    return true;    
                                }
                            }
                            v[y][x]=0;
                            block[b][i]=0;
                            row[y][i]=0;
                            col[x][i]=0;
                            
                        }
                    }
                    return false;
                }
                else
                {
                    // console.log("x");
                    if(x==8)
                    {
                        if(func(row,col,block,v,y+1,0))
                        {
                            return true;
                        }
                        // return false;
                    }
                    else
                    {
                        if( func(row,col,block,v,y,x+1))
                        {
                            return true;
                        }
                        // return false;
                    }
                }
                
            return false;
                             
                
            }





            let row = Array.from(Array(9), () => new Array(9));
            let col = Array.from(Array(9), () => new Array(9));
            let block = Array.from(Array(9), () => new Array(9));
            
            for( let i=0;i<9;i++)
            {
                for( let j=0;j<9;j++)
                {
                    block[i][j]=0;
                    row[i][j]=0;
                    col[i][j]=0;
                }
            }


            for( let y=0;y<9;y++)
            {
                for( let x=0;x<9;x++)
                {   
                    // console.log(v[y][x]);
                    if(v[y][x] > 0)
                    {
                        let b= Math.floor(3*(Math.floor(y/3))) + Math.floor(x/3);
                        // console.log(5678);
                        let i = v[y][x];
                        i--;
                        
                        // console.log(block[b][i],b,i);
                        // console.log(i);
                        if(i>8 ||block[b][i]==1 || row[y][i]==1 || col[x][i]==1 ) 
                        {
                            document.getElementById('para').innerHTML="wrong input";
                            return;
                        }
                        block[b][i]=1;
                        row[y][i]=1;
                        col[x][i]=1;
                        
                    }
                    else if(v[y][x]<0)
                    {
                        document.getElementById('para').innerHTML="wrong input";
                        return;
                    }
                    
                }
            }


            let y = func(row,col,block,v,0,0);
            

            if(y==false)
            {
                document.getElementById('para').innerHTML="wrong input";
                return;
            }
           



            let x="";
            for( let i=0;i<9;i++)
            {
                x+= v[i] + "<br>";
            }
            document.getElementById('para').innerHTML=x;
        }