<html>
    <head>
        <style>
            .container{
                display: flex;
                justify-content: space-between;
                align-items:center;
            }
            .layout{
                display:flex;
                justify-content:space-around;
                align-items:center;
                height:500px;
                gap:10px;
            }
            .leftside{
                border: solid 1px grey;
                width:50%;
                height: 100%;
            }
            .rigthside{
                width:50%;
                height: 100%;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
            }
            .blog{
                border: solid 1px grey;
                width:100%;
                height: 30%;
            }
        </style>
    </head>
    <body>
        
    

    <div class="container">
    <h1>{{$title}}</h1>
    <div class="menu">
        @for($i = 0 ; $i < sizeof($menu); $i++)
            <span>{{$menu[$i]}}</span>
            @if($i < sizeof($menu) -1)
                <span>|</span>
            @endif
        @endfor
    </div>
    </div>
    <div class="layout">
        <div class="leftside">
            <label for="">Name</label>
            <input type="text">
            <label for="">Email</label>
            <input type="email">
            <label for="">Comment</label>
            <textarea rows="" cols=""></textarea>
            <label for="">Gender</label>
            <input type="radio" value="option1" id="inlineRadio1">
            <label for="inlineRadio1">Male</label>
            <input type="radio" value= "option2" id="inlineRadio2">
            <label for="inlineRadio2">Female</label>
        </div>
        <div class="rigthside">
            <div class="blog">
                <h3>My favorite items</h3>
                <p>
                    @for($i = 0; $i < sizeof($favoritedItem); $i++)
                    <ul>
                        <li>
                            {{$favoritedItem[$i]}}
                        </li>
                    </ul>
                    
                    @endfor
                </p>
            </div>
            <div class="blog">
                <h3>My purchase items</h3>
                <p>
                <ol>
                    @for($i = 0; $i < sizeof($purchaseItem); $i++)
                    
                        <li>
                            {{$purchaseItem[$i]}}
                        </li>
                    @endfor
                </ol>
                </p>
            </div>
            <div class="blog"></div>
        </div>
    </div>
    </body>
</html>         